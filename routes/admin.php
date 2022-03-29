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


/*
Route::post('admin/login',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:web']],function(){
    Route::post('logout',[AuthController::class,'logout']);
});*/
//super admin login
Route::post('superadmin/login',[AuthController::class, 'sadminLogin'])->name('sadminLogin');
Route::get('checksadmin',[AuthController::class,'checkSadmin'])->name('checkSadmin');
Route::group( ['prefix' => 'superadmin','middleware' => ['auth:admin-api','scopes:admin'] ],function(){
    Route::post('sadminLogout',[AuthController::class,'sadminLogout']);
});

//Company admin login
Route::post('admin/login',[AuthController::class, 'adminLogin'])->name('adminLogin');
Route::get('checkadmin',[AuthController::class,'checkAdmin'])->name('checkAdmin');
Route::group( ['prefix' => 'admin','middleware' => ['auth:company-api','scopes:company'] ],function(){
    Route::post('adminLogout',[AuthController::class,'adminLogout']);
    //Route::get('dashboard',[LoginController::class, 'adminDashboard']);
});

//Employee section
Route::get('employee', [EmployeeController::class, 'index']);
Route::post('employee/create', [EmployeeController::class, 'store']);
Route::put('employee/update/{id}', [EmployeeController::class, 'update']);
Route::delete('employee/destroy/{id}', [EmployeeController::class, 'destroy']);
Route::put('updateStatus/{id}', [EmployeeController::class, 'updateStatus']);
