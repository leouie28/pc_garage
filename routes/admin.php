<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\AuthController;
use App\Http\Controllers\CompanyController;

Route::post('/login',[AuthController::class,'login']);
Route::post('/companyLogin',[AuthController::class,'companyLogin']);

Route::group(['middleware'=>['auth:web']],function(){
    Route::post('logout',[AuthController::class,'logout']);
});

Route::get('company', [CompanyController::class, 'index']);
Route::post('company/create', [CompanyController::class, 'store']);
Route::put('company/update/{id}', [CompanyController::class, 'update']);
Route::delete('company/destroy/{id}', [CompanyController::class, 'destroy']);
Route::put('updateStatus/{id}', [CompanyController::class, 'updateStatus']);