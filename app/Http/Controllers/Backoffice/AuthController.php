<?php

namespace App\Http\Controllers\Backoffice;

use App\Models\Admin;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
   //super admin controller
    public function sadminLogin(Request $request){
        
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

        if(auth()->guard('admin')->attempt(['email' => request('email'), 'password' => request('password')])){

            config(['auth.guards.api.provider' => 'admin']);
            
            $admin = Admin::select('admins.*')->find(auth()->guard('admin')->user()->id);
            $data =  $admin;
            $data['token'] =  $admin->createToken('MyToken',['admin'])->accessToken;
            return response()->json($data, 200);
        } 
        else{ 
            return response()->json(['message' => 'Invalid Credentials'], 404);
        }
    }
    public function sadminLogout()
    {
        auth()->guard('admin-api')->user()->token()->revoke();
        return response()->json(['Superadmin Logout Success'], 200); 
    }
    //COMPANY CONTROLLER
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

        if(auth()->guard('company')->attempt(['email' => request('email'), 'password' => request('password')])){

            config(['auth.guards.api.provider' => 'company']);
            
            $company = Company::select('companies.*')->find(auth()->guard('company')->user()->id);
            $data =  $company;
            $data['token'] =  $company->createToken('Mytoken',['company'])->accessToken; 
            return response()->json($data, 200);
        } 
        else{ 
            return response()->json(['message' => 'Invalid Credentials'], 404);
        }
    }
    public function adminLogout()
    {
        auth()->guard('company-api')->user()->token()->revoke();
        return response()->json(['Admin Logout Success'], 200); 
    }
}
