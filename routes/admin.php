<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\OrderProductController;
use App\Http\Controllers\Backoffice\AuthController;
use App\Http\Controllers\Backoffice\ImageController;
use App\Http\Controllers\Backoffice\CustomerController;

Route::post('login',[AuthController::class, 'adminLogin'])->name('adminLogin');
Route::get('checkadmin',[AuthController::class,'checkAdmin'])->name('checkAdmin');
Route::group(['middleware'=>['auth:admin']],function(){

    //Ngadi isulod an iyo routes

    Route::get('logout',[AuthController::class,'adminLogout']);

    //Search section
    Route::get('search', [SearchController::class, 'index']);

    //Company section
    Route::get('company', [CompanyController::class, 'index']);
    Route::post('company/create', [CompanyController::class, 'store']);
    Route::put('company/update/{id}', [CompanyController::class, 'update']);
    Route::delete('company/destroy/{id}', [CompanyController::class, 'destroy']);
    Route::put('company/updateStatus/{id}', [CompanyController::class, 'updateStatus']);

    //Employee section
    Route::get('employee', [EmployeeController::class, 'index']);
    Route::post('employee/create', [EmployeeController::class, 'store']);
    Route::put('employee/update/{id}', [EmployeeController::class, 'update']);
    Route::delete('employee/destroy/{id}', [EmployeeController::class, 'destroy']);
    Route::put('employee/updateStatus/{id}', [EmployeeController::class, 'updateStatus']);

    //OderProduct section
    Route::get('orderProduct', [OrderProductController::class, 'index']);
    Route::post('orderProduct/create', [OrderProductController::class, 'store']);
    Route::put('orderProduct/update/{id}', [OrderProductController::class, 'update']);
    Route::delete('orderProduct/destroy/{id}', [OrderProductController::class, 'destroy']);
    Route::put('orderProduct/updateStatus/{id}', [OrderProductController::class, 'updateStatus']);

    //Category
    Route::get('category', [CategoryController::class, 'index']);
    Route::post('category/create', [CategoryController::class, 'store']);
    Route::put('category/update/{id}', [CategoryController::class, 'update']);
    Route::delete('category/destroy/{id}', [CategoryController::class, 'destroy']);

});


/*
Route::post('admin/login',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:web']],function(){
    Route::post('logout',[AuthController::class,'logout']);
});*/

//super admin login
//Route::post('superadmin/login',[AuthController::class, 'sadminLogin'])->name('sadminLogin');

// Route::group( ['prefix' => 'superadmin','middleware' => ['auth:admin-api','scopes:admin'] ],function(){
//     // Route::post('sadminLogout',[AuthController::class,'sadminLogout']);
//     // Route::post('logout',[AuthController::class,'adminLogout']);
// });

//Company admin login


Route::group( ['prefix' => 'admin','middleware' => ['auth:company-api','scopes:company'] ],function(){
    // Route::post('adminLogout',[AuthController::class,'adminLogout']);
    // Route::post('logout',[AuthController::class,'logout']);
    // Route::post('logout',[AuthController::class,'adminLogout']);
    Route::post('customer/store',[CustomerController::class,'store']);
    Route::post('image/store',[ImageController::class,'store']);
    //Route::get('dashboard',[LoginController::class, 'adminDashboard']);
});

