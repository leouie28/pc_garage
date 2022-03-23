<?php

namespace App\Http\Controllers\Backoffice;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CAAuthController extends Controller
{
    public function adminLogin(Request $request){
        
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

        $company = Company::where('email', $request->email)->first();  
        if(!$company){
            return response()->json(['message' => 'Incorrect Credentials'], 404);
        }
        if(Hash::check($request->password,$company->password)){
            $token = $company->createToken('accessToken')->accessToken;
            $data = $company;
            $data['accesstoken'] = $token;
            return response()->json($data, 200);
        } 
        else{ 
            return response()->json(['message' => 'Invalid Credentials'], 404);
        }
    }
    public function adminLogout()
    {
        auth()->guard('company-api')->user()->token()->revoke();
        return response()->json(['Logout Success'], 200); 
    }
}
