<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProductOrder;
use App\Models\Product;
use App\Models\Order;
Use App\Models\Option;
Use App\Models\Customer;
use Illuminate\Http\Request;

class ProductOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
        $customer = new Customer();
        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->email = $request->email;
        $customer->save();
        $customerID = $customer->id;

        $order = new Order();
        $order->total = $request->total;
        $order->payment_id = $request->payment_id;
        $order->customer_id = $customerID;
        $order->employee_id = $request->employee_id;
        $order->save();
        $orderId = $order->id;

        $product_orders = new ProductOrder();
        $product_orders->status = $request->status;
        $product_orders->quantity = $request->quantity;
        $product_orders->price = $request->price;
        $product_orders->product_id = $request->product_id;
        $product_orders->order_id = $orderId;
        $product_orders->option_id = $request->option_id;
        $product_orders->save();
        return response()->json(['message'=>'Order Successfuly'], 200);

        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductOrder  $product_orders
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductOrder  $product_orders
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductOrder  $product_orders
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
