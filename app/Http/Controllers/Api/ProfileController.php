<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function changePassword(){

        $validator = Validator::make($request->all(),
        [
            'old_password'    => 'required',
            'password' => 'required|min:6',
            'confirm_password' => 'required|min:6',
        ]);
        if($validator->fails())
        return response()->json([
            'message' => 'Validation Error',
            'data'    => $validator->errors()
        ], 404);

        $employee=$request->employee();
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
