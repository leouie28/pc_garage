<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return Order::with('customers', 'employees')->get();
    }

    public function create()
    {
        return Order::view();
    }

    public function getOrderDetails($id)
    {
        return OrderProduct::where('order_id', $id)->with('products', 'options')->get();
    }
}
