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

    public function genUpdate(Request $request)
    {
        try{
            if(isset($request->status)){
                $result = array();
                $success_id = array();
                $error_id = array();
                $stat = array();
                foreach($request->items as $item){
                    $stat = $this->updateStatArrival($request, $item);
                    if($stat['type'] == 'success'){
                        $success_id[] = $stat['id'];
                    }else{
                        $error_id[] = $stat['id'];
                    }
                }
                $result = [
                    'success' => $success_id,
                    'serror' => $error_id,
                ];
                return [
                    "data" => $result,
                    "type" => "success",
                    "message" => 'Selected orders successfully updated...',
                ];
            }else{
                $orders = array();
                foreach($request->items as $item){
                    $order = Order::find($item);
                    $order->arrival = $request->arrival;
                    $order->save();
                    $orders[] = $order->id;
                }
                return [
                    "data" => $orders,
                    "type" => "success",
                    "message" => 'Selected orders successfully updated...',
                ];
            }
        }catch(Exception $e){
            return [
                "data" => $request,
                "type" => "error",
                "message" => $e->getMessage(),
            ];
        }
    }

    public function updateStatArrival($value, $id)
    {
        $valid = array(2, 3, 4); 
        $notValid = array(0, 1);
        $currentStat = Order::find($id, ['status']);

        if(in_array($currentStat->status, $valid)){
            if(in_array($value->status, $notValid)){
                $this->returnStock($value, $id);
            }else{
                $order = Order::find($id);
                if($value->status==4){
                    $now = date('Y-m-d');
                    $order->date_received = $now;
                }
                $order->status = $value->status;
                if(isset($value->arrival)){
                    $order->arrival = $value->arrival;
                }
                $order->save();

                return [
                    "id" => $order->id,
                    "type" => "success",
                ];
            }
        }else{
            if(in_array($value->status,  $valid)){
                return $this->validateOrder($value, $id);
            }
            else{
                $order = Order::find($id);
                $order->status = $value->status;
                if(isset($value->arrival)){
                    $order->arrival = $value->arrival;
                }
                $order->save();

                return [
                    "id" => $order->id,
                    "type" => "success",
                ];
            }
        }
    }

    public function updateStatus(Request $request, $id)
    {
        try{
            $valid = array(2, 3, 4); 
            $notValid = array(0, 1);
            $currentStat = Order::find($id, ['status']);

            if(in_array($currentStat->status, $valid)){
                if(in_array($request->status, $notValid)){
                    return $this->returnStock($request, $id);
                }else{
                    $order = Order::find($id);
                    if($request->status==4){
                        $now = date('Y-m-d');
                        $order->date_received = $now;
                    }
                    $order->status = $request->status;
                    $order->save();

                    return [
                        "data" => $order,
                        "type" => "success",
                        "message" => 'Order successfully updated...',
                    ];
                }
            }else{
                if(in_array($request->status,  $valid)){
                    return $this->validateOrder($request, $id);
                }
                else{
                    $order = Order::find($id);
                    $order->status = $request->status;
                    if($request->arrival){
                        $order->arrival = $request->arrival;
                    }
                    $order->save();

                    if($request->status==0){
                        $note = 'cancel';
                    }elseif($request->status==1){
                        $note = 'pending';
                    }
            
                    $this->makeNotify(
                        $id = $order->customer_id,
                        $type = 'App\Models\Customer',
                        $data = array(
                            "name" => $order->order_code,
                            "text" => 'Order is '. $note,
                            "link" => 'orders',
                            "icon" => 'cart-remove',
                        )
                    );

                    return [
                        "data" => $currentStat,
                        "type" => "success",
                        "message" => 'Order successfully updated...',
                    ];
                }
            }

        }catch(Exception $e){
            return [
                "data" => $request,
                "type" => "error",
                "message" => $e->getMessage(),
            ];
        }
    }

    public function updateArrival(Request $request, $id)
    {
        $arrival = Order::find($id);
        $arrival->arrival = $request->arrive;
        $arrival->save();

        return [
            "data" => $arrival,
            "type" => "success",
            "message" => 'Arrival successfully updated...',
        ];
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
