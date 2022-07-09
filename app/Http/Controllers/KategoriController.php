<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KategoriController extends Controller
{
    public function getAll(Request $req)
    {
        try {
            $categories = DB::table('categories')
                ->get();

            return response([
                'message' => 'success',
                'data' => $categories,
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
            $categories = DB::table('categories')
                ->where('id', $id)
                ->get();

            if (count($categories) > 0) {
                return response([
                    'message' => 'success',
                    'data' => $categories->first(),
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
            DB::table('categories')
                ->insert([
                    'nama' => $req->nama,
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
            DB::table('categories')
                ->where('id', $req->id)
                ->update([
                    'nama' => $req->nama,
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
            DB::table('categories')
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
