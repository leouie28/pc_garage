<?php

use App\Http\Controllers\Customer\CartController;
use App\Http\Controllers\Customer\CheckoutController;
use App\Http\Controllers\Customer\OrderController;
use App\Http\Controllers\Customer\ProductController;
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

    Route::controller(CartController::class)->group(function () {
        Route::post('cart/remove-cart', 'removeCarts');
    });

    Route::controller(CheckoutController::class)->group(function () {
        Route::get('checkout', 'getItems');
    });

    Route::resources([
        'products' => ProductController::class,
        'cart' => CartController::class
    ]);

});