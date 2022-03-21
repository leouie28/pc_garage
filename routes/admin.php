<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\AuthController;



Route::post('/login',[AuthController::class,'login']);