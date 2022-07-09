<?php

namespace App\Http\Controllers;

use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function getAll(Request $req)
    {
        try {
            $orders = DB::table('order')
                ->get();

            return response([
                'message' => 'success',
                'data' => $orders,
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
            $orders = DB::table('order as o')
                ->leftJoin('user as u', 'o.user_id', '=', 'u.id')
                ->where('o.id', $id)
                ->get();

            $orderDetails = DB::table('order_detail as od')
                ->leftJoin('produk as p', 'od.produk_id', '=', 'p.id')
                ->where('od.order_id', $id)
                ->get();

            if (count($orders) > 0) {
                return response([
                    'message' => 'success',
                    'data' => [
                        'order' => $orders->first(),
                        'order_detail' => $orderDetails,
                    ],
                ]);
            } else {
                return response([
                    'message' => 'Order tidak ditemukan',
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
        DB::beginTransaction();
        try {
            $user = json_decode($req->session()->get('sessionUser'));
            $orderDetails = $req->orderDetails;
            $currentTime = new DateTime('now', new DateTimeZone('Asia/Jakarta'));

            DB::table('order')
                ->insert([
                    'tanggal_order' => $currentTime->format('Y-m-d H:i:s'),
                    'status' => 'belum_lunas',
                    'user' => $user->id
                ]);

            DB::table('order_detail')
                ->insert([
                    $orderDetails
                ]);

            DB::commit();
            return response([
                'message' => 'success',
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
            return response([
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function delete(Request $req)
    {
        try {
            DB::table('order')
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
