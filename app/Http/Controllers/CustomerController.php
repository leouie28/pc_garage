<?php

namespace App\Http\Controllers;

use App\Filters\CustomerFilter;
use App\Models\Admin;
use App\Models\Customer;
use App\Models\Image;
use Carbon\Carbon;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return (new CustomerFilter)->searchable();
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
    try{
      $customer = Customer::create($request->toArray());
  
      return [
        "data" => $customer,
        "type" => "success",
        "message" => "User successfully added.",
      ];
    }catch(Exception $e){
      return [
        "data" => $request,
        "type" => "error",
        "message" => "Failed to add customer! Please try again.",
      ];
    }
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
    try{
      $customer = Customer::find($id);
      $customer->first_name = $request->first_name;
      $customer->last_name = $request->last_name;
      $customer->gender = $request->gender;
      $customer->birthday = $request->birthday;
      $customer->address = $request->address;
      $customer->phone = $request->phone;
      $customer->email = $request->email;
      if(isset($request->password)){
        $customer->password = Hash::make($request->password);
      }
      $customer->save();
  
      return [
        "data" => $customer,
        "type" => "success",
        "message" => "User successfully updated.",
      ];
    }catch(Exception $e){
      return [
        "data" => $request,
        "type" => "error",
        "message" => $e->getMessage(),
      ];
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $customer = Customer::withCount('orders')->where('id', $id)->first();
    if($customer->orders_count>0){
      return [
        "data" => $customer,
        "type" => "error",
        "message" => "Failed to delete user! This user has order record.",
      ];
    }else{
      $customer->delete();
      return [
        "data" => $customer,
        "type" => "warning",
        "message" => "Delete successfully",
      ];
    }
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
    $customer->first_name = $request->first_name;
    $customer->last_name =  $request->last_name;
    $customer->birthday =   $request->birthday;
    $customer->address =    $request->address;
    $customer->gender =    $request->gender;
    $customer->phone =      $request->phone;
    $customer->email =      $request->email;
    $customer->password = bcrypt($request->password);
    $customer->save();

    if ($request->image_base64) {
      $file = uploadImage($request->image_base64,'images/customer/');
      $image = Image::create([
          'imagable_id' => $customer->id,
          'imagable_type' => 'App\Models\Customer',
          'file_name' => $file
      ]);
    }

    return $customer;
  }
}
