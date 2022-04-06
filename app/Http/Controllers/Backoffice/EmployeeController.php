<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {

    }
    public function store()
    {
        $employee = new Employee();
        $employee->name = $request->name;
        $employee->email = $request->email;
        $employee->password = $request->phone;
        $employee->position = $request->position;
        $employee->status = $request->status;
        $employee->company_id = $request->company_id;
        $employee->save();
    }
}
