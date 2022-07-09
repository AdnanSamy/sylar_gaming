<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    // use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        return view('index');
    }

    public function cart()
    {
        return view('cart');
    }

    public function checkout()
    {
        return view('checkout');
    }

    public function contact()
    {
        return view('contact');
    }

    public function detail()
    {
        return view('detail');
    }

    public function shop()
    {
        return view('shop');
    }

    public function login()
    {
        return view('login');
    }

    public function register()
    {
        return view('register');
    }

    public function konfirmasi()
    {
        return view('konfirmasi');
    }

    public function admin(Request $req)
    {
        $user = json_decode($req->session()->get('sessionUser'));

        return view('admin.admin',[
            'user' => $user,
        ]);
    }
}
