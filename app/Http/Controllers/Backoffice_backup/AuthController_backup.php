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
//    //super admin controller
//     public function sadminLogin(Request $request){
        
//         $validator = Validator::make($request->all(),
//         [
//             'email'    => 'required|email',
//             'password' => 'required',
//         ]);
//         if($validator->fails())
//         return response()->json([
//             'message' => 'Validation Error',
//             'data'    => $validator->errors()
//         ], 404);

//         if(auth()->guard('admin')->attempt(['email' => request('email'), 'password' => request('password')])){

//             config(['auth.guards.api.provider' => 'admin']);
            
//             $admin = Admin::select('admins.*')->find(auth()->guard('admin')->user()->id);
//             $data =  $admin;
//             $data['token'] =  $admin->createToken('Sadmintoken',['admin'])->accessToken;
//             return response()->json($data, 200);
//         } 
//         else{ 
//             return response()->json(['message' => 'Invalid Credentials'], 404);
//         }
//     }
//     public function checkSadmin(Request $request){
//         return Auth::check();
//         // return Auth::guard('web')->user(); 
//     }
//     public function sadminLogout()
//     {
//         auth()->guard('admin-api')->user()->token()->revoke();
//         return response()->json(['Superadmin Logout Success'], 200); 
//     }
//     //COMPANY CONTROLLER
//     public function adminLogin(Request $request){

//         $data = $request->validate([
//             'email' => 'required',
//             'password' => 'required',
//         ]);
//         // if(!auth()->attempt($data)){
//         $admin = Admin::where('email',$data['email'])->first();
//         if(!$admin){
//             $admin = Company::where('email',$data['email'])->first();
//             if(!$admin)
//             {
//                 return response(['error_message' => 'Incorrect credentials']);
//             }
//         }
//         $admin->makeVisible(['password']);
//         if(!Hash::check($data['password'],$admin->password)){
//             return response(['error_message' => 'Incorrect credentials']);
//         }
//         Auth::login($admin);
//         // }
//         // $token = $admin->createToken('BackOffice')->accessToken;

//         return response(['user' => auth()->user()]);
//     }
//     public function checkAdmin(Request $request){
//         return Auth::check();
//         // return Auth::guard('web')->user(); 
//         Auth::logout();
//         return Auth::user();
//     }
//     public function adminLogout(Request $request)
//     {
//         // auth()->guard('company-api')->user()->token()->revoke();
//         // return response()->json(['Admin Logout Success'], 200); 
//         Auth::logout();
//         $request->session()->invalidate();

//         return "success";
//     }
}
