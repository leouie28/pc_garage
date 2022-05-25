<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $cart = Cart::where('employee_id', $user->id)->where('status', 0)->with(['products', 'customer'])->get();

        return response($cart ,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Add orders to cart
    {
        $user = Auth::user();

        $product = Product::find($request->product_id);
        $product_price = $product->price;
        
        $cart = new Cart();
        $cart->quantity = $request->quantity;
        // $cart->product_id = $product->id;
        $cart->price = $product_price;
        $cart->total = $product_price * $request->quantity;
        $cart->product_id = $request->product_id;
        $cart->customer_id = $request->customer_id;
        $cart->employee_id = $user->id;
        $cart->comment = $request->comment;
        if( ($request->quantity > $product->stock ) ) {
            return response()->json('Quantity Exceeds Stock!!', 404);
        }else {
        $cart->save();
        return response()->json('Order Added to Cart', 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function show(Cart $cart, $id) // Display cart by customer ID
    {
        $user = Auth::user();
        $customer = Customer::with(['carts' => function($qqq){
            return $qqq->where('status',0)->with('products.images');
        }])->find($id);
        $cart = Cart::where('customer_id', $id)->where('status', 0)->get();
        $customer['total'] = $cart->sum('total');

        return response($customer ,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart, $id)//Update order quantity of the product in the cart
    {
        $cart = Cart::find($id);
        $product = Product::find($cart->product_id);
        
        if($cart->status == 1){
            return response()->json('Cannot Proceeed!! This Order in the cart is already confirmed.', 404);
        }
        if( ($request->quantity > $product->stock ) ) {
            return response()->json(' Cannot Proceeed!! Quantity Exceeds Stock.', 404);
        }
        $cart->update(['quantity' => $request->quantity]);

        return response()->json('Cart Order Updated Successfuly', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart, $id) // Delete order in the cart
    {
        $cart = Cart::find($id);
        if($cart->status == 1){
            return response()->json('Cannot Proceeed!! This Order is already confirmed', 404);
        }
        $cart->delete();

        return response()->json('Cart Order Deleted', 200);
    }
}
