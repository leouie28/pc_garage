<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Cart;
use App\Models\Customer;
use App\Models\Employee;
use App\Models\OrderProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $user = Auth::user();
        // $order = Order::where('employee_id', $user->id)->with(['payments', 'customers', 'employees'])->get();

        // return response($order,200);
    }
    public function confirmedOrder($id) //Confirmed Order in the Cart
    {
        $user = Auth::user();
        $emp = $user->id;
        $customer = Customer::find($id);
        $cart = Cart::where('customer_id', $id)->where('status', 0)->get();
        $cusTotal = $cart->sum('total');
        $qtyCount = $cart->sum('quantity');
        
        $order = Order::create([
            'total' => $cusTotal,
            'order_qty' => $qtyCount,
            'customer_id' => $id,
            'employee_id' => $emp,
        ]);
        foreach ($cart as $c) {
        $orderId = $order->id;
        $order_product = OrderProduct::create([
            'quantity' => $c->quantity,
            'price' => $c->price,
            'product_id' => $c->product_id,
            'comment' => $c->comment,
            'order_id' => $orderId,
        ]);
        $qty = $order_product->quantity;
        $prod = $order_product->product_id;
        $product = Product::find($prod);
        $product->decrement('stock', $qty);
        
        $c->update([
            'status'=> 1,
        ]);
    }

        return response()->json('Confirmed Order');
    }
    public function payment(Request $request, $id) // Payment of the Order Product
    {
        $user = Auth::user();

        $customer = Customer::with(['orders' =>function($qu) use($user){
            return $qu->where('employee_id', $user->id)->whereHas('order_product', function($op){
                return $op->where('status', 0);});
        },'orders.order_product' =>function($que){
            return $que->with(['products','options']);
        }])->find($id);

        $order = Order::where('customer_id', $id)->where('status', 0)->whereHas('order_product')->first();

        $payment = new Payment();
        $payment->paid = $request->paid;
        $payment->change = $request->paid - $order->total;
        $payment->save();
        $paymentId = $payment->id;
        $payment['total'] = $order->total;
        
        $order->payment_id = $paymentId;
        $order->save();
        $order->update(['status' => 1,]);
        // $order->order_product()->update(['status' => 1]);

        return response($payment,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order, $id)
    {
        // $user = Auth::user();
        // $order = Order::where('customer_id', $id)->with(['payments', 'customers', 'employees'])->get();
 
        // return response($order,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
