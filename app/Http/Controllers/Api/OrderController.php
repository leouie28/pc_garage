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
        //
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
        // $c->update([
        //     'status'=> 1,
        // ]);
        $c->delete();
    }

        return response()->json('Confirmed Order');
    }
    public function confirmNocustomer() //Confirmed Order in the Cart
    {
        $user = Auth::user();
        $emp = $user->id;
        $cart = Cart::whereNull('customer_id')->where('status', 0)->latest()->first()->get();
        $cartTotal = $cart->sum('total');
        $cartQty = $cart->sum('quantity');
        
        $order = Order::create([
            'total' =>  $cartTotal,
            'order_qty' => $cartQty,
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
        // $c->update([
        //     'status'=> 1,
        // ]);
        $c->delete();
    }

        return response()->json('Confirmed Order');
    }
    public function payment(Request $request, $id) // Payment of the Order Product
    {
        $user = Auth::user();

        $customer = Customer::with(['orders' =>function($qu) use($user){
            return $qu->where('employee_id', $user->id)->whereHas('order_product');
        },'orders.order_product' =>function($que){
            return $que->with('products');
        }])->find($id);

        $order = Order::where('customer_id', $id)->where('status', 0)->whereHas('order_product')->latest()->first();

        $payment = new Payment();
        $payment->paid = $request->paid;
        $payment->change = $request->paid - $order->total;
        $payment->save();
        $paymentId = $payment->id;
        $payment['total'] = $order->total;
        
        $order->payment_id = $paymentId;
        $order->save();
        $order->update(['status' => 1,]);

        return response($payment,200);
    }
    public function payOrder(Request $request, $id) // Payment of the Order Product
    {
        $user = Auth::user();

        $order = Order::where('employee_id', $user->id)->where('status', 0)->find($id);

        $payment = new Payment();
        $payment->paid = $request->paid;
        $payment->change = $request->paid - $order->total;
        $payment->save();
        $paymentId = $payment->id;
        $payment['total'] = $order->total;
        
        $order->payment_id = $paymentId;
        $order->save();
        $order->update(['status' => 1,]);

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
        $user = Auth::user();

        // $option_price = 0;
        // if($request->option_id != null){
        //     $option = Option::find($request->option_id);
        //     $option_price = $option->addprice;
        //     $q = $option->decrement('stock');
        // }

        $product = Product::find($request->product_id);
        $product_price = $product->price;
        $qty = $product->decrement('stock', $request['quantity']);

        // $customer = Customer::find($id);
        $order = new Order();
        $order->total = $product_price * $request['quantity'];
        $order->payment_id = $request->payment_id;
        $order->customer_id = $request->customer_id;
        // $order->customer_id = $customer->id;
        $order->employee_id = $user->company_id;
        $order->save();
        $orderId = $order->id;

        $order_product = new OrderProduct();
        $order_product->quantity = $request->quantity;
        $order_product->product_id = $request->product_id;
        // $order_product->product_id = $product->id;
        $order_product->price = $product->price;
        $order_product->order_id = $orderId;
        $order_product->option_id = $request->option_id;
        $order_product->comment = $request->comment;
        $order_product->save();

        $order = Order::where('status', 0)->with('order_product', function($qqqq){
            return $qqqq->with('products', 'products.images');
        })->latest()->first();
        
        return response()->json($order, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order, $id)
    {
        //
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
