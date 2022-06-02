<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any?}', function () {
    return view('layouts.app');
})->where('any','.*');

Route::resource('companies','App\Http\Controllers\CompanyController');
Route::resource('category','App\Http\Controllers\CategoryController');
Route::resource('employees','App\Http\Controllers\EmployeeController');
Route::resource('customers','App\Http\Controllers\CustomerController');
Route::resource('products','App\Http\Controllers\ProductController');
Route::resource('variations','App\Http\Controllers\VariationController');
Route::resource('options','App\Http\Controllers\OptionController');
Route::resource('orders','App\Http\Controllers\OrderController');
Route::resource('categories','App\Http\Controllers\CategoryController');
Route::resource('payment','App\Http\Controllers\PaymentController');
