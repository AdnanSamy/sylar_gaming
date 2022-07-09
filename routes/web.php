<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

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

Route::get('/', [Controller::class, "index"]);
Route::get('/cart', [Controller::class, "cart"]);
Route::get('/checkout', [Controller::class, "checkout"]);
Route::get('/contact', [Controller::class, "contact"]);
Route::get('/detail', [Controller::class, "detail"]);
Route::get('/shop', [Controller::class, "shop"]);
Route::get('/login', [Controller::class, "login"]);
Route::get('/register', [Controller::class, "register"]);

