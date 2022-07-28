<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Stock;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function validateOrder($data, $id)
    {
        $order = Order::with('products')->find($id);
        foreach($order->products as $prod){
            $bal = Product::withSum('stocks', 'stocks.stocks')->find($prod->id);
            if($prod->pivot->quantity > $bal->stocks_sum_stocksstocks){
                return [
                    "data" => $data,
                    "type" => "error",
                    "message" => 'Failed to update order! Error in stocks of the product. Please check if the product has enough item to make an order...',
                ];
                break;
            }
        }

        foreach($order->products as $prod){
            $available = array();
            foreach($prod->stocks as $prodStock){
                if($prodStock->stocks >= $prod->pivot->quantity){
                    $available[] = $prodStock->id;
                }
            }
            if(count($available)>0){
                $key = array_rand($available);
                $stock = Stock::find($available[$key]);
                $stock->update(['stocks' => $stock->stocks - $prod->pivot->quantity]);
                $order->products()->sync([ $prod->id => ['price' => $prod->price, 'quantity' => $prod->pivot->quantity, 'stock_id' => $stock->id, 'sku' => $stock->sku] ]);
            }else{
                $ord_qty = $prod->pivot->quantity;
                $toDl = $prod->pivot->id;
                $stocks = $prod->stocks;
                $counter = 0;
                while($ord_qty > 0){
                    if($stocks[$counter]->stocks>0){
                        $stock = Stock::find($stocks[$counter]->id);
                        if($ord_qty < $stock->stocks){
                            $order->products()->attach($prod->id, ['price' => $prod->price, 'quantity' => $ord_qty, 'stock_id' => $stock->id, 'sku' => $stock->sku]);
                            $stock->update(['stocks' => $stock->stocks - $ord_qty]);
                            $ord_qty = 0;
                        }else{
                            $order->products()->attach($prod->id, ['price' => $prod->price, 'quantity' => $stock->stocks, 'stock_id' => $stock->id, 'sku' => $stock->sku]);
                            $ord_qty = $ord_qty - $stock->stocks;
                            $stock->update(['stocks' => $stock->stocks - $stock->stocks]);
                        }
                    }
                    $counter++;
                }
                DB::table('order_product')->delete($toDl);
            }
        }

        $stat = Order::find($id);
        if($data->status==4){
            $now = date('Y-m-d');
            $stat->date_received = $now;
        }
        $stat->status = $data->status;
        $stat->save();

        return [
            "data" => $stat,
            "type" => "success",
            "message" => 'Order successfully updated...',
        ];
    }

    public function returnStock($data, $id){
        $order = Order::with('products')->find($id);

        $prod_ids = array();
        $prod_stocks = array();

        foreach($order->products as $prod){ //group by sku id and sum the quantity
            if(!in_array($prod->id, $prod_ids)){
                $prod_ids[] = $prod->id;
                $prod_stocks[$prod->id] = $prod->pivot->quantity;
            }else{
                $prod_stocks[$prod->id] = $prod_stocks[$prod->id] + $prod->pivot->quantity;
            }
            $stock = Stock::find($prod->pivot->stock_id);
            $stock->stocks = $stock->stocks + $prod->pivot->quantity;
            $stock->save();

            DB::table('order_product')->delete($prod->pivot->id);
        }

        $check = array();
        foreach($order->products as $prod){
            if(!in_array($prod->id, $check)){
                $check[] = $prod->id;
                $order->products()->sync([ $prod->id => ['price' => $prod->price, 'quantity' => $prod_stocks[$prod->id], 'stock_id' => null, 'sku' => null]] );
            }
        }

        $stat = Order::find($id);
        $stat->status = $data->status;
        $stat->save();

        return [
            "data" => $stat,
            "type" => "success",
            "message" => 'Order successfully updated...',
        ];
    }

}
