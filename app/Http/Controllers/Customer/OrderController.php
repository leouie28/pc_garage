<?php

namespace App\Http\Controllers\Customer;

use App\Filters\OrderFilter;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return (new OrderFilter)->searchable();
    }
}
