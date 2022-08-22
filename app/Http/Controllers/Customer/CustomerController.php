<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Customer;
use App\Models\Image;
use App\Models\Order;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

    public function customerProfile()
    {
        try{
            return [
                'profile' => Auth::guard('web')->user(),
            ];
        }catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function update(Request $request)
    {
        try{
            $id = Auth::guard('web')->user()->id;
            $user = Customer::find($id);
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->gender = $request->gender;
            $user->birthday = $request->birthday;
            $user->address = $request->address;
            $user->phone = $request->phone;
            $user->email = $request->email;
            if(isset($request->password)){
                $user->password = Hash::make($request->password);
            }
            $user->save();
            if($request->image_base64){
                $file = uploadImage($request->image_base64,'images/customer/');
                $img = Image::where('imagable_id', $user->id)->first();
                if($img){
                    $img->file_name = $file;
                    $img->save();
                }else{
                    $img = Image::create([
                        'imagable_id' => $user->id,
                        'imagable_type' => 'App\Models\Customer',
                        'file_name' => $file
                    ]);
                }
                // $img = $user->images;
                // $image = Image::find($img->id);
                // $image->file_name = $file;
                // $image->save();
            }
            event(new Registered($user = $user));
            return [
                'data' => $user,
                'type' => 'success',
                'message' => 'Profile successfully updated...'
            ];
        }catch(Exception $e){
            return [
                'data' => $request,
                'type' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }
}
