<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login'])->name('login');
Route::get('check-auth',[AuthController::class,'checkAuth'])->name('checkAuth');
Route::get('logout',[AuthController::class,'logout']);

Route::group(['middleware'=>['auth:admin']],function(){
    Route::resource('category', CategoryController::class);
    Route::resource('product', ProductController::class);
});