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
        ], 422);

        $employee = Employee::where('email', $request->email)->first();  
        if(!$employee){
            return response(['error_message' => 'Incorrect credentials']);
        }
        if(Hash::check($request->password,$employee->password)){
            $data['name'] = $employee->name;
            $data['accesstoken'] = $employee->createToken('accessToken')->accessToken;

            return response()->json([
                'status'  => true,
                'message' => 'Employee Login Successful',
            ]);
        } 
        else{ 
            return response()->json([
                'message' => 'Invalid Credentials'
            ],422);
        }
    }
    public function checkEmployee(Request $request)
    {
        return $request->user();
    }
    public function logout(Request $request)
    {
        auth()->guard('api')->user()->token()->revoke();
        return response()->json(['Success'], 200); 
    }
}
