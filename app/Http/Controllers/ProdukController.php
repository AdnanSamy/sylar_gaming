<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProdukController extends Controller
{

    public function getByCategories(Request $req, $categoriesId)
    {
        try {
            $products = DB::table('produk as p')
                ->leftJoin('categories as c', 'c.id', '=', 'p.categories_id')
                ->where('p.categories_id', $categoriesId)
                ->get();

            return response([
                'message' => 'success',
                'data' => $products,
            ]);
        } catch (\Throwable $th) {
            throw $th;
            return response([
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function getAll(Request $req)
    {
        try {
            $products = DB::table('produk as p')
                ->select('p.*', 'c.kategori')
                ->leftJoin('categories as c', 'c.id', '=', 'p.categories_id')
                ->get();

            return response([
                'message' => 'success',
                'data' => $products,
            ]);
        } catch (\Throwable $th) {
            throw $th;
            return response([
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function get(Request $req, $id)
    {
        try {
            $products = DB::table('produk')
                ->where('id', $id)
                ->get();

            if (count($products) > 0) {
                return response([
                    'message' => 'success',
                    'data' => $products->first(),
                ]);
            } else {
                return response([
                    'message' => 'Kategori tidak ditemukan',
                ], 404);
            }
        } catch (\Throwable $th) {
            throw $th;
            return response([
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function add(Request $req)
    {
        try {
            DB::table('produk')
                ->insert([
                    'categories_id' => $req->categories_id,
                    'nama' => $req->nama,
                    'deskripsi' => $req->deskripsi,
                    'harga' => $req->harga,
                    'stok' => $req->stok,
                    'views' => $req->views,
                ]);

            return response([
                'message' => 'success',
            ]);
        } catch (\Throwable $th) {
            throw $th;
            return response([
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function update(Request $req)
    {
        try {
            DB::table('produk')
                ->where('id', $req->id)
                ->update([
                    'categories_id' => $req->categories_id,
                    'nama' => $req->nama,
                    'deskripsi' => $req->deskripsi,
                    'harga' => $req->harga,
                    'stok' => $req->stok,
                    'views' => $req->views,
                ]);

            return response([
                'message' => 'success',
            ]);
        } catch (\Throwable $th) {
            throw $th;
            return response([
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function delete(Request $req)
    {
        try {
            DB::table('produk')
                ->where('id', $req->id)
                ->delete();

            return response([
                'message' => 'success',
            ]);
        } catch (\Throwable $th) {
            throw $th;
            return response([
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
