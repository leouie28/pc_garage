<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Customer\ProductController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\SetController;
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
Route::resource('/web/web-products', ProductController::class);
Route::resource('/web/web-categories', CategoryController::class);
Route::get('web/web-best-selling', [ProductController::class, 'bestSell']);
Route::get('web/web-search', [ProductController::class, 'customSearch']);
Route::get('/web/web-compatibilities/main-item', [SetController::class, 'mainItem']);
Route::get('/web/web-compatibilities/available-item', [SetController::class, 'availableItem']);
Route::post('/web/web-compatibilities/check-items', [SetController::class, 'checkItems']);

Route::get('/web/sales', [SaleController::class, 'todaysSales']);
Route::get('/web/sales-report', [SaleController::class, 'salesReport']);

Route::get('/{any?}', function () {
    return view('app');
})->where('any','.*');

// Route::get('company', [CompanyController::class, 'index']);


// Route::resource('dashboards','App\Http\Controllers\DashboardController');
// Route::resource('companies','App\Http\Controllers\CompanyController');
// Route::resource('category','App\Http\Controllers\CategoryController');
// Route::resource('employees','App\Http\Controllers\EmployeeController');
// Route::resource('customers','App\Http\Controllers\CustomerController');
// Route::resource('products','App\Http\Controllers\ProductController');
// Route::resource('variations','App\Http\Controllers\VariationController');
// Route::resource('options','App\Http\Controllers\OptionController');
// Route::resource('orders','App\Http\Controllers\OrderController');
// Route::resource('categories','App\Http\Controllers\CategoryController');
// Route::resource('payment','App\Http\Controllers\PaymentController');
