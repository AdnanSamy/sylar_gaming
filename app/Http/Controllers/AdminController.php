<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function produk(Request $req){
        $user = json_decode($req->session()->get('sessionUser'));

        return view('admin.produk.index', [
            'user' => $user,
        ]);
    }
}
