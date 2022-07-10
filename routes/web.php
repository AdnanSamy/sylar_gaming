<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\KonfirmasiController;
use App\Http\Controllers\AdminController;
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

Route::post('/login-action', [UserController::class, 'loginUser']);
Route::get('/user', [UserController::class, 'getAll']);
Route::get('/user/{id}', [UserController:: class, 'get']);
Route::post('/user', [UserController::class, 'add']);
Route::put('/user', [UserController::class, 'update']);
Route::delete('/user', [UserController::class, 'delete']);

Route::get('/kategori', [KategoriController:: class, 'getAll']);
Route::get('/kategori/{id}', [KategoriController:: class, 'get']);
Route::post('/kategori', [KategoriController::class, 'add']);
Route::put('/kategori', [KategoriController::class, 'update']);
Route::delete('/kategori', [KategoriController::class, 'delete']);

Route::get('/produk', [ProdukController:: class, 'getByCategories']);
Route::get('/produk', [ProdukController:: class, 'getAll']);
Route::get('/produk/{id}', [ProdukController:: class, 'get']);
Route::post('/produk', [ProdukController::class, 'add']);
Route::post('/produk/update', [ProdukController::class, 'update']);
Route::delete('/produk', [ProdukController::class, 'delete']);

Route::post('/konfirmasi/{order_id}', [KonfirmasiController::class, 'add']);

Route::get('/files/{file}', function($file) {
    return response(Storage::get('\public\\' . $file))
    ->header('Content-Type', 'image/jpeg');;
});

Route::get('/admin-produk', [AdminController::class, 'produk']);
Route::get('/admin-produk/new', [AdminController::class, 'tambahProduk']);
Route::get('/admin-produk/{id}', [AdminController::class, 'editProduk']);

Route::get('/admin-kategori', [KategoriController::class, 'kategori']);
Route::get('/admin-kategori/new', [KategoriController::class, 'newView']);
Route::get('/admin-kategori/{id}', [KategoriController::class, 'editView']);

Route::get('/', [Controller::class, "index"]);
Route::get('/cart', [Controller::class, "cart"]);
Route::get('/checkout', [Controller::class, "checkout"]);
Route::get('/contact', [Controller::class, "contact"]);
Route::get('/detail', [Controller::class, "detail"]);
Route::get('/shop', [Controller::class, "shop"]);
Route::get('/register', [Controller::class, "register"]);
Route::get('/login', [Controller::class, "login"]);
Route::get('/konfirmasi', [Controller::class, "konfirmasi"]);
Route::get('/profile', [Controller::class, "profile"]);
Route::get('/admin', [Controller::class, 'admin']);

//php


