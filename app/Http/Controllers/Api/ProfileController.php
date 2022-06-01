<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function employeeDetails()
    {
            $employee = Auth::user();

            return response($employee,200);
    }
    public function upImage(Request $request)
    {       
        $employee = Auth::user();
        $employee=$request->user();

        if($request->hasfile('image'))
        {
        $filePath = Storage::disk('public')->putFile('', $request->file('image'));
        $employee->image = $filePath;
        }
            $employee->update([
                'image'=>$filePath,
            ]);

       return response()->json('Update Profile Successfuly', 200);
    }
    public function updateProfile(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'name'    => 'required',
            'phone' => 'required|digits:11',
        ]);
        if($validator->fails())
        return response()->json([
            'message' => 'Validation Error',
            'data'    => $validator->errors()
        ], 404);
        $employee = Auth::user();
        $employee=$request->user();

            $employee->update([
                'name'=>$request->name,
                'phone'=>$request->phone,
            ]);

        return response()->json('Update Profile Successfuly', 200);

    }
    public function changePassword(Request $request){

        $validator = Validator::make($request->all(),
        [
            'old_password'    => 'required',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);
        if($validator->fails())
        return response()->json([
            'message' => 'Validation Error',
            'data'    => $validator->errors()
        ], 404);
        
        $employee=$request->user();

        if(Hash::check($request->old_password, $employee->password)){
            $employee->update([
                'password'=>Hash::make($request->password)
            ]);
            return response()->json('Password Successfuly Change', 200);
        }
        else{ 
            return response()->json(['message' => 'Old Password Doest Not Match'], 404);
        }

    }
}
