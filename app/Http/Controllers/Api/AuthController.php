<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use  Illuminate\Support\Facades\Log;
use App\Mail\sendEmail;

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

    public function requestOtp(Request $request)
    {
        $title = '[UBui] Sending OTP verification';
        $otp = rand(1000,9999);
        Log::info("otp = ".$otp);
        $user = Employee::where('email','=',$request->email)->update(['otp' => $otp]);
        
        if($user){

        $mail_details = [
            'subject' => 'Reset Password OTP',
            'body' => 'Your OTP is : '. $otp
        ];
       
         $send = Mail::to($request->email)->send(new sendEmail($title, $mail_details));
         if(empty($send)){
            return response(["status" => 200, "message" => "OTP sent successfully"]);
         }
         else{
            return response(["status" => 401, 'message' => 'sent failed']);
        }
        }
        else{
            return response(["status" => 404, 'message' => 'Invalid']);
        }
    }

    public function verifyOtp(Request $request)
    {
        $user  = Employee::where([['email','=',$request->email],['otp','=',$request->otp]])->first();
        if($user){
            // auth()->login($user, true);
            Employee::where('email','=',$request->email)->update(['otp' => 0]);
            $employee = Employee::where('email', $request->email)->first();
            if($employee){
                $data['id'] = $employee->id;
                $data['email'] = $employee->email;
                return response()->json($data, 200);
               
            }
            // $accessToken = auth()->user()->createToken('authToken')->accessToken;

            // return response(["status" => 200, "message" => "Success", 'user' => auth()->user(), 'access_token' => $accessToken]);

        }
        else{
            return response(["status" => 401, 'message' => 'Invalid']);
        }
    }
    
    public function newPassword(Request $request)
    {
        if($request->password == $request->confirmpass){

            $newPass = Employee::where('email', $request->email)->update('password', $request->password);
            if($newPass){
                return response(["message" => 'new password successful']);
            }
        }
        else {
            return response(["message" => 'password does not match!']);
        }
    }
}
