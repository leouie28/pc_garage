<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Product;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Models\CompanyCustomer;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function indexCompany()
    {
        return Company::count();
    }

    public function indexEmployee()
    {
        $user = Auth::user();
        $employee = Employee::where('company_id', $user->id)->count();

        return response()->json($employee, 200);
    }

    public function indexProduct()
    {
        $user = Auth::user();
        $product = Product::where('company_id', $user->id)->count();

        return response()->json($product, 200);
    }

    public function indexCustomer()
    {
        $user = Auth::user();
        $customer = CompanyCustomer::where('company_id', $user->id)->count();

        return response()->json($customer, 200);
    }
}
