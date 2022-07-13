<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Customer;
use Carbon\Carbon;
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
    return Customer::withCount('orders')->get();
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }

  public function checkEmail()
  {
    if (Customer::where('email', Request()->email)->exists()) {
      return true;
    }
    if (Admin::where('email', Request()->email)->exists()) {
      return true;
    }
    return false;
  }

  public function register(Request $request)
  {
    $customer = new Customer();
    if ($request->image_base64) {
      $file = uploadImage($request->image_base64,'images/customer/');
      $customer->avatar = $file;
    }
    $customer->first_name = $request->first_name;
    $customer->last_name =  $request->last_name;
    $customer->birthday =   Carbon::parse($request->birthday);
    $customer->address =    $request->address;
    $customer->phone =      $request->phone;
    $customer->email =      $request->email;
    $customer->password = bcrypt($request->password);
    $customer->save();
  }
}
