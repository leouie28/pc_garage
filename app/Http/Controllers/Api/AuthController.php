<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request){
        
        $validator = Validator::make($request->all(),
        [
            'email'    => 'required|email',
            'password' => 'required',
        ]);
        if($validator->fails())
        return response()->json([
            'message' => 'Validation Error',
            'data'    => $validator->errors()
        ], 404);

        $employee = Employee::where('email', $request->email)->first();  
        if(!$employee){
            return response()->json(['message' => 'Incorrect Credentials'], 404);
        }
        if(Hash::check($request->password,$employee->password)){
            $token = $employee->createToken('accessToken')->accessToken;
            $data['created_at'] = $employee->created_at;
            $data['accesstoken'] = $token;
            return response()->json($data, 200);
        } 
        else{ 
            return response()->json(['message' => 'Invalid Credentials'], 404);
        }
    }
    public function logout()
    {
        auth()->guard('api')->user()->token()->revoke();
        return response()->json(['Logout Success'], 200); 
    }
}
