<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login'])->name('login');
Route::get('check-auth',[AuthController::class,'checkAuth'])->name('checkAuth');
Route::get('logout',[AuthController::class,'logout']);
Route::get('check-email', [CustomerController::class, 'checkEmail']);
Route::post('register', [CustomerController::class, 'register']);

Route::group(['middleware'=>['auth:admin']],function(){

    Route::resource('category', CategoryController::class);
    Route::resource('product', ProductController::class);
    Route::resource('customer', CustomerController::class);
    Route::resource('order', OrderController::class);

    //dashboard
    Route::get('dashboard/month-orders', [DashboardController::class, 'monthOrders']);
    Route::get('dashboard/orders', [DashboardController::class, 'orders']);
    Route::get('dashboard/statistic', [DashboardController::class, 'statistic']);
});