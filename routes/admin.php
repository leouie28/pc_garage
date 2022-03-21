<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\AuthController;



Route::post('/login',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:web']],function(){
    Route::get('logout',[AuthController::class,'logout']);
});