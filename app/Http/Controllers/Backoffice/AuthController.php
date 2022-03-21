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
            'password' => 'required',
        ]);
        
        if($validator->fails())
        return response()->json([
            'message' => 'Validation Error',
            'data'    => $validator->errors()
        ], 422);
        
        $admin = Admin::where('email',$data['email'])->first();
        if(!$admin){
            return response(['error_message' => 'Incorrect credentials']);
        }
        $admin->makeVisible(['password']);
        if(!Hash::check($data['password'],$admin->password)){
            return response(['error_message' => 'Incorrect credentials']);
        }
        Auth::login($admin);

        return response(['user' => auth()->user()]);
    }
}
