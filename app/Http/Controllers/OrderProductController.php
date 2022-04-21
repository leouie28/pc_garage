<?php

namespace App\Http\Controllers;

use App\Models\OrderProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderProductController extends Controller
{
    public function index()
    {
       
        // $user = Auth::user();
        // $orderProduct = OrderProduct::where('status', 0)->with('orders', function($q) use($user) {
        //     return $q->where('employee_id', '=', $user->id);
        // })->with(['products', 'options'])->get();
        // return response($orderProduct, 200);

        return OrderProduct::with('products', 'options.variations', 'orders.customers')->get();
    }

    public function create()
    {
        return OrderProduct::view();
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
