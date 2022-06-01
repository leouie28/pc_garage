<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index()
    {
        $customer = Customer::all();
        return response()->json($customer);
    }

    public function store(Request $request)
    {

        //to add data in pivot
        $customer = Customer::find(10);
        $customer->companies()->attach(2);

        return 'Success';

    }
    public function delete($id)
    {
        Customer::find($id)->delete();
        return redirect()->back();
    }
}
