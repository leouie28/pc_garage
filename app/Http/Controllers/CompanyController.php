<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

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
            'email' => 'required|unique:companies',
        ]);

        $company = new Company([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'barangay' => $request->barangay,
            'city' => $request->city,
            'province' => $request->province,
            'password' => $request->password
        ]);
        $company->save();
 
        return response()->json('Company successfully added');
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
        $company = Company::find($id);
        $input = $request->all();
        if(!isset($input['password'])){
            $input['password'] = $company->password;
        }
        $company->update($input);
 
        return response()->json('Company successfully updated');
    }

    public function destroy($id)
    {
        $company = Company::find($id);
        $company->delete();
 
        return response()->json('Company successfully deleted');
    }

    public function updateStatus($id)
    {
        $company = Company::find($id);
        $company->update(['status'=>  !$company->status]);
        return  $company;
    }
    
}
