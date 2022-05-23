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
      
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderProduct  $orderProduct
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {

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

       

    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderProduct  $orderProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderProduct $orderProduct, $id)
    {

    }
}
