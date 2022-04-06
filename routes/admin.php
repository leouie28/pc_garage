<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\AuthController;
use App\Http\Controllers\Backoffice\CustomerController;
use App\Http\Controllers\Backoffice\ImageController;


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
    Route::post('customer/store',[CustomerController::class,'store']);
    Route::post('image/store',[ImageController::class,'store']);
    //Route::get('dashboard',[LoginController::class, 'adminDashboard']);
});