<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\AuthController;


/*
Route::post('admin/login',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:web']],function(){
    Route::post('logout',[AuthController::class,'logout']);
});*/
//super admin login
Route::post('superadmin/login',[AuthController::class, 'sadminLogin'])->name('sadminLogin');
Route::group( ['prefix' => 'superadmin','middleware' => ['auth:admin-api','scopes:admin'] ],function(){
    Route::post('sadminLogout',[AuthController::class,'sadminLogout']);
});

//Company admin login
Route::post('admin/login',[AuthController::class, 'adminLogin'])->name('adminLogin');
Route::group( ['prefix' => 'admin','middleware' => ['auth:company-api','scopes:company'] ],function(){
    Route::post('adminLogout',[AuthController::class,'adminLogout']);
    //Route::get('dashboard',[LoginController::class, 'adminDashboard']);
});