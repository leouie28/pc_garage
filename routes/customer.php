<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Customer\CartController;
use App\Http\Controllers\Customer\CheckoutController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Customer\FeedbackController;
use App\Http\Controllers\Customer\OrderController;
use App\Http\Controllers\Customer\ProductController;
use App\Http\Controllers\RecommendationController;
use App\Http\Controllers\SetController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware'=>['auth:web']],function(){

    // Route::get('products', [ProductController::class, 'index']);
    // Route::get('getall-cart', [CartController::class, 'index']);
    // Route::get('cart-count', [CartController::class, 'cartCount']);
    // Route::put('update-cart/{id}', [CartController::class, 'updateCart']);
    // Route::delete('remove-cart/{id}', [CartController::class, 'removeCart']);
    // Route::post('store-cart', [CartController::class, 'store']);
    // Route::post('cart-checkout', [CartController::class, 'checkout']);
    // Route::get('orders', [OrderController::class, 'index']);

    Route::controller(CustomerController::class)->group(function () {
        Route::get('user/nav-stat', 'navStat');
        Route::get('profile', 'customerProfile');
        Route::put('update-profile', 'update');
    });

    Route::controller(CartController::class)->group(function () {
        Route::post('cart/remove-cart', 'removeCarts');
    });

    Route::controller(CheckoutController::class)->group(function () {
        Route::get('checkout', 'getItems');
    });

    Route::controller(OrderController::class)->group(function () {
        Route::get('order-stat', 'orderStat');
        Route::put('orders/cancel/{id}', 'cancelOrder');
        Route::put('orders/receive-order/{id}', 'receiveOrder');
    });

    Route::controller(ProductController::class)->group(function () {
        Route::get('products/best-selling', 'bestSell');
        Route::get('products/search', 'customSearch');
    });

    Route::controller(SetController::class)->group(function () {
        Route::get('compatibilities/main-item', 'mainItem');
        Route::get('compatibilities/available-item', 'availableItem');
        Route::post('compatibilities/check-items', 'checkItems');
    });

    Route::resources([
        'products' => ProductController::class,
        'cart' => CartController::class,
        'orders' => OrderController::class,
        'feedback' => FeedbackController::class,
        'categories' => CategoryController::class,
        'recommendations' => RecommendationController::class,
    ]);

});