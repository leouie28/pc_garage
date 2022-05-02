<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Company;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
         $company = Company::where('id', $user->company_id)->with('customers')
        ->first();

        return response($company,200);
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();

        $customer = new Customer();
        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->email = $request->email;
        $customer->save();
        $customer->companies()->attach($user->company_id);

        return response()->json($customer, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = Auth::user();
        return Customer::find($id);
    }
    public function customerOrders(Request $request, $id)
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
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
