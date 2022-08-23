<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RecommendationController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\SetController;
use App\Http\Controllers\SkuProfileController;
use App\Http\Controllers\StockController;
use App\Models\Recommendation;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login'])->name('login');
Route::get('check-auth',[AuthController::class,'checkAuth'])->name('checkAuth');
Route::get('logout',[AuthController::class,'logout']);
Route::get('check-email', [CustomerController::class, 'checkEmail']);
Route::post('register', [CustomerController::class, 'register']);

Route::group(['middleware'=>['auth:admin']],function(){

    //dashboard
    Route::controller(DashboardController::class)->group(function () {
        Route::get('dashboard/month-orders', 'monthOrders');
        Route::get('dashboard/orders', 'orders');
        Route::get('dashboard/statistic', 'statistic');
        Route::get('dashboard/report', 'getDatas');
    });

    //order
    Route::controller(OrderController::class)->group(function () {
        Route::put('order/update-status/{id}', 'updateStatus');
        Route::put('order/update-arrival/{id}', 'updateArrival');
        Route::put('order/group-update', 'genUpdate');
        Route::get('order/get-product', 'getProduct');
    });

    //stock
    Route::controller(StockController::class)->group(function () {
        Route::get('stock/sku', 'getProductSku');
        Route::put('stock/update-sku/{skuId}', 'updateSkuStocks');
    });

    Route::controller(AdminController::class)->group(function () {
        Route::get('admin-info', 'adminInfo');
    });

    //sales
    Route::controller(SaleController::class)->group(function () {
        Route::get('sales/check-sales', 'checkSales');
        Route::get('sales/report', 'salesWeek');
    });

    Route::controller(SetController::class)->group(function () {
        Route::get('compatibility/search-item', 'searchItem');
        Route::post('compatibility/add-item', 'addItem');
        Route::post('compatibility/remove-item', 'removeItem');
    });

    Route::controller(RecommendationController::class)->group(function () {
        Route::put('recommendation/mark-read/{id}', 'markRead');
    });

    //Notification
    Route::controller(NotificationController::class)->group(function () {
        Route::get('admin-notification', 'adminNotification');
        Route::put('admin-notification/mark-read', 'markRead');
    });

    Route::resources([
        'admin' => AdminController::class,
        'category' => CategoryController::class,
        'product' => ProductController::class,
        'customer' => CustomerController::class,
        'order' => OrderController::class,
        'stock' => StockController::class,
        'recommendation' => RecommendationController::class,
        'sales' => SaleController::class,
        'sku-profile' => SkuProfileController::class,
        'compatibility' => SetController::class,
    ]);
});