<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\OrderProductController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::post('/login',[AuthController::class,'login']);
//Forgot Password
Route::any('request_otp',[AuthController::class, 'requestOtp']);
Route::post('verify_otp',[AuthController::class, 'verifyOtp']);
Route::post('new_password',[AuthController::class, 'newPassword']);

Route::group(['middleware'=>['auth:api']],function(){
    //Employee Profile
    Route::get('employeedetails',[ProfileController::class,'employeeDetails']);
    Route::post('uploadImage',[ProfileController::class,'upImage']);
    Route::post('update-profile',[ProfileController::class,'updateProfile']);
    Route::post('changepassword',[ProfileController::class,'changePassword']);
    Route::post('logout',[AuthController::class,'logout']);

    //Product
    Route::get('products',[ProductController::class, 'index']);
    Route::get('categories',[ProductController::class, 'catDisplay']);
    Route::get('products/outStock',[ProductController::class, 'outStock']);
    Route::get('product-show/{id}',[ProductController::class, 'show']);

    //Customer
    Route::get('customers',[CustomerController::class, 'index']);
    Route::get('customer-show/{id}',[CustomerController::class, 'show']);
    Route::post('customer/store',[CustomerController::class,'store']);

    //Order//
    Route::post('confirmedorder/{id}',[OrderController::class,'confirmedOrder']);
    Route::post('confirmnocustomer',[OrderController::class,'confirmNocustomer']);
    Route::post('orderproduct/store',[OrderController::class,'store']);
    Route::post('paymentorder/{id}',[OrderController::class,'payment']);
    Route::post('payOrder/{id}',[OrderController::class,'payOrder']);
    
    //Cart
    Route::get('cart',[CartController::class,'index']);
    Route::get('cart/{id}',[CartController::class,'show']);
    Route::get('cartnocustomer',[CartController::class,'showNoCustomer']);
    Route::get('deletecart/{id}',[CartController::class,'destroy']);
    Route::post('addtocart',[CartController::class,'store']);
    Route::post('updatecart/{id}',[CartController::class,'update']);

    //Order Product//
    Route::get('orderproduct',[OrderProductController::class,'index']);
    Route::get('displayAll/Paid',[OrderProductController::class,'allPaid']);
    Route::get('orderproduct/paid',[OrderProductController::class,'displayPaid']);
    Route::get('orderproduct/pending',[OrderProductController::class,'displayPending']);
    Route::get('orderPending/{id}',[OrderProductController::class,'pendingbyId']);
    Route::get('orderPaid/{id}',[OrderProductController::class,'paidbyId']);
    Route::get('displayOrder/{id}',[OrderProductController::class,'displayOrder']);
    Route::get('ordertoprepared/{id}',[OrderProductController::class,'orderToprepare']);
    Route::get('toprepared',[OrderProductController::class,'toPrepared']);
    Route::post('markprepared/{id}',[OrderProductController::class,'markPrepared']);
});