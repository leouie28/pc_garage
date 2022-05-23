<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Models\Option;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Cart;
use App\Models\Customer;
use App\Models\Employee;
use App\Models\OrderProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class OrderProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() // Display all Orders
    {
        $user = Auth::user();

        $order = Order::where('employee_id', $user->id)->with('customers')->with('order_product', function($opp){
            return $opp->with('products');
        })
        ->whereDate('created_at', \Carbon\Carbon::today())->get();

        return response($order, 200);
    }
    public function displayPending() //display pending Orders
    {
        $user = Auth::user();

        $order = Order::where('employee_id', $user->id)->where('status', 0)->with('customers', 'order_product')
        ->whereDate('created_at', \Carbon\Carbon::today())->get();

        return response($order, 200);
    }
    public function displayPaid() //display paid Orders
    {
        $user = Auth::user();

        $order = Order::where('employee_id', $user->id)->where('status', 1)->with('customers', 'order_product')
        ->whereDate('created_at', \Carbon\Carbon::today())->get();

        return response($order, 200);
    }
    public function displayP($id) //display paid Orders
    {
        $user = Auth::user();

        $order = Order::where('employee_id', $user->id)->where('status', 0)->with('customers')
        ->with('order_product', function($opp){
            return $opp->with('products');
        })->whereDate('created_at', \Carbon\Carbon::today())->find($id);

        return response($order, 200);
    }
    public function confirmedOrder($id) //Confirmed Order in the Cart
    {
    //     $user = Auth::user();
    //     $emp = $user->id;
    //     $customer = Customer::find($id);
    //     $cart = Cart::where('customer_id', $id)->where('status', 0)->get();
    //     $cusTotal = $cart->sum('total');
    //     $qtyCount = $cart->sum('quantity');

        
    //     $order = Order::create([
    //         'total' => $cusTotal,
    //         'order_qty' => $qtyCount,
    //         'customer_id' => $id,
    //         'employee_id' => $emp,
    //     ]);
    //     foreach ($cart as $c) {
    //     $orderId = $order->id;
    //     $order_product = OrderProduct::create([
    //         'quantity' => $c->quantity,
    //         'price' => $c->price,
    //         'product_id' => $c->product_id,
    //         'comment' => $c->comment,
    //         'order_id' => $orderId,
    //     ]);
    //     $qty = $order_product->quantity;
    //     $prod = $order_product->product_id;
    //     $product = Product::find($prod);
    //     $product->decrement('stock', $qty);
        
    //     $c->update([
    //         'status'=> 1,
    //     ]);
    // }

    //     return response()->json('Confirmed Order');
    }
    public function toPrepared() //Display Order to Prepared
    {
        $user = Auth::user();
        $orderProduct = OrderProduct::where('prepared', 0)->whereHas('orders', function($q) use($user) {
            return $q->where('employee_id', $user->id);
        })->with(['products' => function($pp){
            return $pp->with('images');
        }, 'orders'])->get();

        return response($orderProduct,200);
    }
    public function markPrepared($id) //Mark Order as Prepared
    {
        $user = Auth::user();
        $orderProduct = OrderProduct::where('prepared', 0)->whereHas('orders', function($q) use($user) {
            return $q->where('employee_id', $user->id);
        })->with(['products', 'orders'])->find($id);
        
        $orderProduct ->where('id', $id)->update([
            'prepared'=> 1,
        ]);

        return response()->json('Order Prepared',200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $user = Auth::user();

        // $option_price = 0;
        // if($request->option_id != null){
        //     $option = Option::find($request->option_id);
        //     $option_price = $option->addprice;
        //     $q = $option->decrement('stock');
        // }

        // $product = Product::find($request->product_id);
        // $product_price = $product->price;
        // $qty = $product->decrement('stock', $request['quantity']);

        // // $customer = Customer::find($id);
        // $order = new Order();
        // $order->total = $product_price * $request['quantity'] + $option_price;
        // $order->payment_id = $request->payment_id;
        // $order->customer_id = $request->customer_id;
        // // $order->customer_id = $customer->id;
        // $order->employee_id = $user->company_id;
        // $order->save();
        // $orderId = $order->id;

        // $order_product = new OrderProduct();
        // $order_product->quantity = $request->quantity;
        // $order_product->product_id = $request->product_id;
        // // $order_product->product_id = $product->id;
        // $order_product->price = $product->price;
        // $order_product->order_id = $orderId;
        // $order_product->option_id = $request->option_id;
        // $order_product->comment = $request->comment;
        // $order_product->save();
        
        // return response()->json('Order Successfuly', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderProduct  $orderProduct
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        // $user = Auth::user();
        
        // $orderProduct = OrderProduct::where('status', 0)
        // ->whereHas('orders', function($q) use($user) {
        //     return $q->where('employee_id', $user->id);
        // })->with(['products', 'orders', 'options'])
        // ->find($id);

        // return response($orderProduct,200);
    }
    public function customerOrders(Request $request, $id) // Display Orders by Customer ID
    {
        $user = Auth::user();

        $customer = Customer::with(['orders' =>function($qu) use($user){
            return $qu->where('employee_id', $user->id)->whereHas('order_product', function($op){
                return $op->where('status', 0);});
        },'orders.order_product' =>function($que){
            return $que->with(['products','options']);
        }])->find($id);
        
        $order = Order::where('customer_id', $id)->whereHas('order_product', function($op){
            return $op->where('status', 0);
        })->get();
        $customer['total'] = $order->sum('total');
        $customer['totalItem'] = $order->count();

        return response($customer, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderProduct  $orderProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrderProduct $orderProduct, $id)
    {

        // $order_product = OrderProduct::find($id);
        // $option = Option::find($order_product->option_id);
        // $order = Order::find($order_product->order_id);
        // $product = Product::find($order_product->product_id);
        
        // if($order_product->status == 1){
        //     return response()->json('Cannot Proceeed!! This Order is already paid', 404);
        // }
        // if( ($request->quantity > $product->stock ) ) {
        //     return response()->json('Quantity Exceeds Stock!!  OUT OF STOCK', 404);
        // }else {
        //     $value = $order_product->quantity - $request->quantity;
        //     $product->update(['stock' => ($product->stock + $value) ]);
        // }
        // $order_product->update(['quantity' => $request->quantity]);
        // $option_price = 0;
        // if($order_product->option_id != null){
        //     $option_price = $option->addprice;
        // }
        // $order->update([
        //     'total' => $product->price * $request['quantity'] + $option_price,
        // ]);

        // return response()->json('Order Updated Successfuly', 200);

    }
    public function payment(Request $request, $id) // Payment of the Order Product
    {
        // $user = Auth::user();

        // $customer = Customer::with(['orders' =>function($qu) use($user){
        //     return $qu->where('employee_id', $user->id)->whereHas('order_product', function($op){
        //         return $op->where('status', 0);});
        // },'orders.order_product' =>function($que){
        //     return $que->with(['products','options']);
        // }])->find($id);

        // $order = Order::where('customer_id', $id)->whereHas('order_product', function($op){
        //     return $op->where('status', 0);
        // })->first();

        // $payment = new Payment();
        // $payment->paid = $request->paid;
        // $payment->change = $request->paid - $order->total;
        // $payment->save();
        // $paymentId = $payment->id;
        // $payment['total'] = $order->total;
        
        // $order->payment_id = $paymentId;
        // $order->save();
        // $order->update(['status' => 1,]);
        // // $order->order_product()->update(['status' => 1]);

        // return response($payment,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderProduct  $orderProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderProduct $orderProduct, $id)
    {
        // $order_product = OrderProduct::where('id', $id)->first();
        // $option = Option::find($order_product->option_id);
        // $order = Order::find($order_product->order_id);
        // $product = Product::find($order_product->product_id);
        // if($order_product->status == 1){
        //     return response()->json('Cannot Proceeed!! This Order is already paid', 404);
        // }else {
        //     $orderProduct->delete();
        //     $product->update(['stock' => ($product->stock + $order_product->quantity) ]);
        // }
        // if($order_product->option_id != null){
        //     $option->update([$option->increment('stock')]);
        // }
        // $order->delete();

        // return response()->json('Order Deleted', 200);
    }
}
