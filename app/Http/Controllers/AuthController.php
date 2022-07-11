<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = Customer::where('email', $request['email'])->first();
        if(!$login){
            $login = Admin::where('email', $request['email'])->first();
            if(!$login){
                return response(['error_message' => 'Incorrect credentials']);
                $role = null;
            }else{
                $role = 'admin';
            }
        }else{
            $role = 'customer';
        }

        $login->makeVisible(['password']);
        if(!Hash::check($request['password'], $login->password)){
            return response(['error_message' => 'Incorrect credentials']);
        }

        Auth::login($login);
        Session::put('role', $role);
        Session::put('user', $login);

        return response(['user' => auth()->user()]);
    }

    public function checkAuth()
    {
        $check = Auth::check();
        if($check){
            $check = Session::get('role');
        }else{
            $check = 0;
        }

        return $check;
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();

        return "success";
    }
}
