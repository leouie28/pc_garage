<?php

use App\Http\Controllers\Customer\CartController;
use App\Http\Controllers\Customer\ProductController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware'=>['auth:web']],function(){

    Route::get('products', [ProductController::class, 'index']);
    Route::get('getall-cart', [CartController::class, 'index']);
    Route::get('cart-count', [CartController::class, 'cartCount']);
    Route::put('update-cart/{id}', [CartController::class, 'updateCart']);
    Route::delete('remove-cart/{id}', [CartController::class, 'removeCart']);
    Route::post('store-cart', [CartController::class, 'store']);

});