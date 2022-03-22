<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\AuthController;



Route::post('/login',[AuthController::class,'login']);
Route::post('/companyLogin',[AuthController::class,'companyLogin']);

Route::group(['middleware'=>['auth:web']],function(){
    Route::post('logout',[AuthController::class,'logout']);
});