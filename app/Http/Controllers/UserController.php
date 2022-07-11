<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //
    public function loginUser(Request $req)
    {
        $username = $req->username;
        $password = $req->password;

        $user = DB::table('user')
            ->where('username', $username)
            ->where('password', $password)
            ->get();

        if (count($user) > 0) {
            $selUser = $user->first();
            $req->session()->put('sessionUser', json_encode($selUser));
            return response([
                'message' => 'success',
                'data' => [
                    'role' => $selUser->role
                ]
            ]);
        } else {
            return response([
                'message' => 'User tidak ditemukan',
            ], 404);
        }
    }

    public function getAll(Request $req)
    {
        try {
            $user = DB::table('user')
                ->get();

            return response([
                'message' => 'success',
                'data' => $user,
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
            $user = DB::table('user')
                ->where('id', $id)
                ->get();

            if (count($user) > 0) {
                return response([
                    'message' => 'success',
                    'data' => $user->first(),
                ]);
            } else {
                return response([
                    'message' => 'User tidak ditemukan',
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
            $exist = DB::table('user')
                ->where('username', $req->username)
                ->get();

            if (count($exist) == 0) {
                DB::table('user')
                    ->insert([
                        'username' => $req->username,
                        'nama' => $req->nama,
                        'password' => $req->password,
                        'telepon' => $req->telepon,
                        'alamat' => $req->alamat,
                        'role' => 'user',
                    ]);

                return response([
                    'message' => 'success',
                ]);
            }else {
                return response([
                    'message' => 'Email sudah dipakai'
                ], 400);
            }
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
            DB::table('user')
                ->where('id', $req->id)
                ->update([
                    'username' => $req->username,
                    'nama' => $req->nama,
                    'password' => $req->password,
                    'telepon' => $req->telepon,
                    'alamat' => $req->alamat,
                    'role' => $req->role,
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
            DB::table('user')
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
