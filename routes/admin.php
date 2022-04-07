<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CategoryController;

Route::post('/login',[AuthController::class,'login']);
Route::post('/companyLogin',[AuthController::class,'companyLogin']);

Route::group(['middleware'=>['auth:web']],function(){
    Route::post('logout',[AuthController::class,'logout']);
});

//Company
Route::get('company', [CompanyController::class, 'index']);
Route::post('company/create', [CompanyController::class, 'store']);
Route::put('company/update/{id}', [CompanyController::class, 'update']);
Route::delete('company/destroy/{id}', [CompanyController::class, 'destroy']);
Route::put('updateStatus/{id}', [CompanyController::class, 'updateStatus']);

//Category
Route::get('category', [CategoryController::class, 'index']);
Route::post('category/create', [CategoryController::class, 'store']);
Route::put('category/update/{id}', [CategoryController::class, 'update']);
Route::delete('category/destroy/{id}', [CategoryController::class, 'destroy']);
