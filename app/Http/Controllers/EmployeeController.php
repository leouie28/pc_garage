<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $employee = Employee::where('company_id', $user->id)->get();

        return response()->json($employee, 200);
    }

    public function create()
    {
        return Employee::view();
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:employees',
            'phone' => 'required|regex:/(09)[0-9]{9}/',
            'password' => 'required|min:8',
        ]);

        $user = Auth::user();
        $employee = new Employee([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'position' => $request->position,
            'password' => Hash::make($request->password),
            'company_id' => $user->id,
        ]);
        $employee->save();
 
        return response()->json($employee, 200);
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'email' => 'required|email|unique:employees,email,'.$id,
            'phone' => 'required|regex:/(09)[0-9]{9}/',
            'password' => 'min:8',
        ]);

        $employee = Employee::find($id);
        $input = $request->all();

        if(!isset($input['password'])){
            $input['password'] = $employee->password;
        }else {
            $input['password'] = Hash::make($request->password);
        }

        $employee->update($input);
 
        return response()->json($employee, 200);
    }

    public function destroy($id)
    {
        $employee = Employee::find($id);
        $employee->delete();
 
        return response()->json($employee, 200);
    }

    public function updateStatus($id)
    {
        $employee = Employee::find($id);
        $employee->update(['status'=>  !$employee->status]);
        return  $employee;
    }
}
