<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CompanyController extends Controller
{
    public function index()
    {
        return Company::get();
    }

    public function create()
    {
        return Company::view();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:companies',
            'email' => 'required|email|unique:companies',
            'phone' => 'required|regex:/(09)[0-9]{9}/',
            'password' => 'required|min:8',
        ]);

        $company = new Company([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'barangay' => $request->barangay,
            'city' => $request->city,
            'province' => $request->province,
            'password' => Hash::make($request->password)
        ]);
        $company->save();
 
        return response()->json($company, 200);
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
            'name' => 'required|unique:companies,name,'.$id,
            'email' => 'required|email|unique:companies,email,'.$id,
            'phone' => 'required|regex:/(09)[0-9]{9}/',
            'password' => 'min:8',
        ]);

        $company = Company::find($id);
        $input = $request->all();

        if(!isset($input['password'])){
            $input['password'] = $company->password;
        }else {
            $input['password'] = Hash::make($request->password);
        }

        $company->update($input);
 
        return response()->json($company, 200);
    }

    public function destroy($id)
    {
        $company = Company::find($id);
        $company->delete();
 
        return response()->json($company, 200);
    }

    public function updateStatus($id)
    {
        $company = Company::find($id);
        $company->update(['status'=>  !$company->status]);
        return  $company;
    }
}
