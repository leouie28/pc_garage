<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\Backoffice\AuthController;

Route::post('/login',[AuthController::class,'login']);
Route::post('/companyLogin',[AuthController::class,'companyLogin']);

Route::group(['middleware'=>['auth:web']],function(){
    Route::post('logout',[AuthController::class,'logout']);
});

//Company section
Route::get('company', [CompanyController::class, 'index']);
Route::post('company/create', [CompanyController::class, 'store']);
Route::put('company/update/{id}', [CompanyController::class, 'update']);
Route::delete('company/destroy/{id}', [CompanyController::class, 'destroy']);
Route::put('updateStatus/{id}', [CompanyController::class, 'updateStatus']);

//Employee section
Route::get('employee', [EmployeeController::class, 'index']);
Route::post('employee/create', [EmployeeController::class, 'store']);
Route::put('employee/update/{id}', [EmployeeController::class, 'update']);
Route::delete('employee/destroy/{id}', [EmployeeController::class, 'destroy']);
Route::put('updateStatus/{id}', [EmployeeController::class, 'updateStatus']);