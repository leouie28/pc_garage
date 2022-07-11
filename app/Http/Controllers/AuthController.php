<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = Customer::where('email', $request['email'])->first();
        if(!$login){
            $login = Admin::where('email', $request['email'])->first();
            if(!$login){
                return response(['error_message' => 'Incorrect credentials']);
            }
        }

        $login->makeVisible(['password']);
        if(!Hash::check($request['password'], $login->password)){
            return response(['error_message' => 'Incorrect credentials']);
        }

        Auth::login($login);

        return response(['user' => auth()->user()]);
    }
}
