<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{
    public function navStat()
    {
        try{
            return [
                'carts' => Cart::where('client_id', Auth::guard('web')->user()->id)->count(),
                'orders' => Order::whereIn('status', [1,2,3])->where('customer_id', Auth::guard('web')->user()->id)->count()
            ];
        }catch(Exception $e){
            return $e->getMessage();
        }
    }
}
