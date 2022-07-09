<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\Controller;
use Facade\FlareClient\Stacktrace\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/user', [UserController:: class, 'getAll']);
Route::get('/user/{id}', [UserController:: class, 'get']);
Route::post('/user', [UserController::class, 'add']);
Route::put('/user', [UserController::class, 'update']);
Route::delete('/user', [UserController::class, 'add']);

Route::get('/kategori', [KategoriController:: class, 'getAll']);
Route::get('/kategori/{id}', [KategoriController:: class, 'get']);
Route::post('/kategori', [KategoriController::class, 'add']);
Route::put('/kategori', [KategoriController::class, 'update']);
Route::delete('/kategori', [KategoriController::class, 'add']);

Route::get('/produk', [ProdukController:: class, 'getByCategories']);
Route::get('/produk', [ProdukController:: class, 'getAll']);
Route::get('/produk/{id}', [ProdukController:: class, 'get']);
Route::post('/produk', [ProdukController::class, 'add']);
Route::put('/produk', [ProdukController::class, 'update']);
Route::delete('/produk', [ProdukController::class, 'add']);

Route::get('/a', function() {
    return response(Storage::get('\public\a.jpg'))
    ->header('Content-Type', 'image/jpeg');;
});


Route::get('/', [Controller::class, "index"]);
Route::get('/cart', [Controller::class, "cart"]);
Route::get('/checkout', [Controller::class, "checkout"]);
Route::get('/contact', [Controller::class, "contact"]);
Route::get('/detail', [Controller::class, "detail"]);
Route::get('/shop', [Controller::class, "shop"]);
Route::get('/register', [Controller::class, "register"]);
Route::get('/login', [Controller::class, "login"]);
Route::get('/konfirmasi', [Controller::class, "konfirmasi"]);



//php


