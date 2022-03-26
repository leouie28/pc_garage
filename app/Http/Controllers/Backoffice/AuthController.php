<?php

namespace App\Http\Controllers\Backoffice;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'email'    => 'required|email',
            'password' => 'required ',
        ]);
        
        if($validator->fails())
        return response()->json([
            'message' => 'Validation Error',
            'data'    => $validator->errors()
        ], 422);
        $admin = Admin::where('email',$data['email'])->first();
        if(!$admin){
            return response(['message' => 'Incorrect Credentials'],404);
        }
        if(Hash::check($data['password'],$admin->password)){
            return response(['message' => 'Incorrect Credentials'],404);
        }
        Auth::login($admin);
        return response(['user' => auth()->user()]);
    }
    public function logout(Request $request){
        auth()->guard('web')->logout();
        $request->session()->invalidate();

        return "logout success";
    }
    //for company admin login
    public function companyLogin(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'email'    => 'required|email',
            'password' => 'required ',
        ]);
        
        if($validator->fails())
        return response()->json([
            'message' => 'Validation Error',
            'data'    => $validator->errors()
        ], 422);
        $company = Company::where('email',$data['email'])->first();
        if(!$company){
            return response(['message' => 'Incorrect Credentials'],404);
        }
        if(!Hash::check($data['password'],$company->password)){
            return response(['message' => 'Incorrect Credentials'],404);
        }
        Auth::login($admin);
        return response(['user' => auth()->user()]);
    }
}
