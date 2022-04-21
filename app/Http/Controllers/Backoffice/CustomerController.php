<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        return (new Customer)->searchable();
    }

    public function store(Request $request)
    {
        $customer = new Customer();
        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->email = $request->email;
        $cus = $customer->save();
        if($cus){
            return back()->with('success', 'You have registered successfuly');
        }else{
            return back()->with('fail', 'Something Went Wrong');
        }

    }
    public function delete($id)
    {
        Customer::find($id)->delete();
        return redirect()->back();
    }
}
