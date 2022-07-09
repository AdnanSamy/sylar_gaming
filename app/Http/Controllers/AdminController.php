<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function produk(Request $req)
    {
        $user = json_decode($req->session()->get('sessionUser'));

        return view('admin.produk.index', [
            'user' => $user,
        ]);
    }

    public function tambahProduk(Request $req)
    {
        $user = json_decode($req->session()->get('sessionUser'));
        $categories = DB::table('categories')
            ->get();

        return view('admin.produk.tambah', [
            'user' => $user,
            'categories' => $categories,
        ]);
    }

    public function editProduk(Request $req, $id)
    {
        $user = json_decode($req->session()->get('sessionUser'));
        $categories = DB::table('categories')
            ->get();

        return view('admin.produk.edit', [
            'user' => $user,
            'categories' => $categories,
            'id' => $id,
        ]);
    }
}
