<?php

namespace App\Http\Controllers;

use App\Filters\OrderFilter;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

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

        $order->products()->attach($request->product, ['price' => $product->price, 'quantity' => $request->quantity]);

        $old = $product->stocks;

        $new = $old - $request->quantity;

        $product->update(['stocks' => $new]);
 
        return $order;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $stat = Order::find($id);
        $stat->status = $request->status;
        $stat->save();

        return $stat;
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
