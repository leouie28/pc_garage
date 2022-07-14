<?php

namespace App\Http\Controllers\Customer;

use App\Filters\CartFilter;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index()
    {
        return (new CartFilter)->searchable();
    }

    public function store(Request $request)
    {
        Cart::create([
            'client_id' => Auth::guard('web')->user()->id,
            'product_id' => $request->product_id
        ]);

        return Cart::where('client_id',Auth::guard('web')->user()->id)->count();
    }

    public function cartCount()
    {
        return Cart::where('client_id',Auth::guard('web')->user()->id)->count();
    }

    public function updateCart(Request $request, $id)
    {
        $cart = Cart::where('id', $id)->first();
        if($request->quantity < 1){
            $cart->delete();
            
        }else{
            $cart->update(['quantity' => $request->quantity]);
        }
        return Cart::where('client_id',Auth::guard('web')->user()->id)->count();
    }

    public function removeCart($id)
    {
        $cart = Cart::where('id', $id)->first();
        $cart->delete();
    }

    public function checkout(Request $request)
    {
        $order = Order::create([
            'total' => $request->total,
            'customer_id' => Auth::guard('web')->user()->id,
        ]);

        $carts = Cart::where('client_id',Auth::guard('web')->user()->id)->get();
        foreach ($carts as $key => $cart) {
            $order->products()->attach($cart->product_id, ['quantity' => $cart->quantity]);
            $cart->delete();
        }
    }
}
