<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function statistic()
    {
        return [
            "product" => Product::count(),
            "order" => Order::count(),
            "customer" => Customer::count(),
            "recommendation" => 0,
        ];
    }

    public function monthOrders()
    {
        $yearMonth = date('Y-m-');
        $d = date('j');
        $order = array();

        for($i=1; $i<=$d; $i++){
            $day = Carbon::createFromDate($yearMonth . $i)->toDateString();
            $order[$day] = Order::whereDate('created_at', $day)->count();
        }

        return $order;
    }

    public function orders()
    {
        $orders = Product::withSum('order', 'order_product.quantity')->get();
        return $orders;
    }
}
