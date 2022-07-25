<?php

namespace App\Http\Controllers;

use App\Filters\OrderFilter;
use App\Models\Order;
use App\Models\Product;
use App\Models\Stock;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new OrderFilter)->searchable();
    }

    public function getProduct()
    {
        return Product::withSum('stocks', 'stocks.stocks')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $order = new Order([
                'order_code' => '#' . genareteNumbers(7),
                'total' => $request->total,
                'note' => $request->note,
                'status' => $request->status,
                'arrival' => $request->arrival,
                'customer_id' => $request->customer,
            ]);
    
            $order->save();
    
            $product = Product::find($request->product);

            $valid = array(2, 3, 4); 
            $notValid = array(0, 1);

            if(in_array($request->status, $valid)){

                $available = array();
        
                foreach($product->stocks as $stocks){
                    if($stocks->stocks>=$request->quantity){
                        $available[] = $stocks->id;
                    }
                }
                if(count($available)>0){
                    $key = array_rand($available);
                    $stock = Stock::find($available[$key]);
                    $stock->update(['stocks' => $stock->stocks - $request->quantity]);
                    $order->products()->attach($request->product, ['price' => $product->price, 'quantity' => $request->quantity, 'stock_id' => $stock->id, 'sku' => $stock->sku]);
                }else{
                    $ord_qty = $request->quantity;
                    $stocks = $product->stocks;
                    $counter = 0;
                    while($ord_qty > 0){
                        if($stocks[$counter]->stocks>0){
                            $stock = Stock::find($stocks[$counter]->id);
                            if($ord_qty<$stock->stocks){
                                $order->products()->attach($request->product, ['price' => $product->price, 'quantity' => $ord_qty, 'stock_id' => $stock->id, 'sku' => $stock->sku]);
                                $stock->update(['stocks' => $stock->stocks - $ord_qty]);
                                $ord_qty = 0;
                            }else{
                                $order->products()->attach($request->product, ['price' => $product->price, 'quantity' => $stock->stocks, 'stock_id' => $stock->id, 'sku' => $stock->sku]);
                                $ord_qty = $ord_qty - $stock->stocks;
                                $stock->update(['stocks' => $stock->stocks - $stock->stocks]);
                            }
                        }
                        $counter++;
                    }
                }
                return [
                    "data" => Order::find($order->id),
                    "type" => "success",
                    "message" => "Order successfully added...",
                ];
            }else{
                $order->products()->attach($request->product, ['price' => $product->price, 'quantity' => $request->quantity]);
                return [
                    "data" => Order::find($order->id),
                    "type" => "success",
                    "message" => "Order successfully added...",
                ];
            }
    
        }catch(Exception $e){
            return [
                "data" => $request,
                "type" => "error",
                "message" => $e->getMessage(),
            ];
        }


        // if($stock){
            
    
            
        // }else{
        //     return [
        //         "data" => $request,
        //         "type" => "error",
        //         "message" => "Failed to update stocks on product...",
        //     ];
        // }

        // $old = $product->stocks;

        // $new = $old - $request->quantity;

        // $product->update(['stocks' => $new]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Order::with(['customer', 'products'])->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return $request;
    }

    public function updateStatus(Request $request, $id)
    {
        // $stat = Order::find($id);
        // $stat->status = $request->status;
        // $stat->save();

        // return $stat;
        $ord = array();
        try{
            $order = Order::with('products')->find($id);

            foreach($order->products as $prod){
                $stock = Stock::find($prod->pivot->stock_id);
                if($stock->stocks < $prod->pivot->quantity){
                    return [
                        "data" => $request,
                        "type" => "error",
                        "message" => 'Failed to update order! Error in stocks of the product. Please check if the product has enough item to make an order...',
                    ];
                    break;
                }
            }

            foreach($order->product as $prod){
                $stock_qty = Stock::find($prod->pivot->stock_id);
                if($stock_qty->stocks >= $prod->pivot->quantity){

                    $available = array();
                    foreach($prod->stocks as $stocks){
                        if($stocks->stocks>=$prod->pivot->quantity){
                            $available[] = $stocks->id;
                        }
                    }
                    if(count($available)>0){
                        $key = array_rand($available);
                        $stock = Stock::find($available[$key]);
                        $stock->update(['stocks' => $stock->stocks - $prod->pivot->quantity]);
                        $order->products()->sync($prod->id, ['price' => $prod->price, 'quantity' => $prod->pivot->quantity, 'stock_id' => $stock->id, 'sku' => $stock->sku]);
                    }else{
                        $ord_qty = $prod->pivot->quantity;
                        $toDl = $prod->pivot->id;
                        $stocks = $prod->stocks;
                        $counter = 0;
                        while($ord_qty > 0){
                            if($stocks[$counter]->stocks>0){
                                $stock = Stock::find($stocks[$counter]->id);
                                if($ord_qty<$stock->stocks){
                                    $order->products()->attach($prod->id, ['price' => $prod->price, 'quantity' => $prod->pivot->quantity, 'stock_id' => $stock->id, 'sku' => $stock->sku]);
                                    $stock->update(['stocks' => $stock->stocks - $ord_qty]);
                                    $ord_qty = 0;
                                }else{
                                    $order->products()->attach($request->product, ['price' => $prod->price, 'quantity' => $stock->stocks, 'stock_id' => $stock->id, 'sku' => $stock->sku]);
                                    $ord_qty = $ord_qty - $stock->stocks;
                                    $stock->update(['stocks' => $stock->stocks - $stock->stocks]);
                                }
                            }
                            $counter++;
                        }
                        DB::table('order_product')->delete($toDl);
                    }
                    return [
                        "data" => Order::find($order->id),
                        "type" => "success",
                        "message" => "Order successfully added...",
                    ];
                }
            }

            return $ord;
        }catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function updateArrival(Request $request, $id)
    {
        $arrival = Order::find($id);
        $arrival->arrival = $request->arrive;
        $arrival->save();

        return $arrival;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
