<?php

namespace App\Http\Controllers;

use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

class ProdukController extends Controller
{

    public function getByCategories(Request $req, $categoriesId)
    {
        try {
            $products = DB::table('produk as p')
                ->select('p.*', 'c.kategori')
                ->leftJoin('categories as c', 'c.id', '=', 'p.categories_id')
                ->where('p.categories_id', $categoriesId)
                ->where('p.nama', 'like', '%'.$req->keyword.'%')
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

    public function getTop4(Request $req)
    {
        try {
            $products = DB::table('produk as p')
                ->select('p.*', 'c.kategori')
                ->leftJoin('categories as c', 'c.id', '=', 'p.categories_id')
                ->limit(4)
                ->orderBy('p.id', 'desc')
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
                ->where('p.nama', 'like', '%'.$req->keyword.'%')
                ->orderBy('p.id', 'desc')
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
                    'message' => 'Produk tidak ditemukan',
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
            $file = $req->file('gambar');
            $filename = str_replace('-', '_', Uuid::uuid4()->toString()) . '.' . $file->extension();

            Storage::put('\public\\' . $filename, file_get_contents($file));

            DB::table('produk')
                ->insert([
                    'categories_id' => $req->categories_id,
                    'nama' => $req->nama,
                    'gambar' => $filename,
                    'deskripsi' => $req->deskripsi,
                    'harga' => $req->harga,
                    'stok' => $req->stok,
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
            if ($req->gambar != 'undefined') {
                $item = DB::table('produk')
                    ->where('id', $req->id)
                    ->get()
                    ->first();

                Storage::delete('\public\\' . $item->gambar);

                $file = $req->file('gambar');
                $filename = str_replace('-', '_', Uuid::uuid4()->toString()) . '.' . $file->extension();

                Storage::put('\public\\' . $filename, file_get_contents($file));

                DB::table('produk')
                    ->where('id', $req->id)
                    ->update([
                        'categories_id' => $req->categories_id,
                        'nama' => $req->nama,
                        'gambar' => $filename,
                        'deskripsi' => $req->deskripsi,
                        'harga' => $req->harga,
                        'stok' => $req->stok,
                    ]);

                return response([
                    'message' => 'success',
                ]);
            } else {
                return response([
                    'message' => 'Gambar harus diinput',
                ], 400);
            }

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
