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
            $orders = DB::table('order as o')
                ->select('o.*', 'u.username', 'u.nama as pembeli', 'u.telepon', 'u.alamat')
                ->leftJoin('user as u', 'o.user_id', '=', 'u.id')
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

            $orderId = $currentTime->format('Ymdhis');

            foreach ($orderDetails as $o) {
                $o['orderId'] = $orderId;

                $produk = DB::table('produk')
                    ->where('id', $o['produk_id'])
                    ->get()
                    ->first();

                $qty = $produk->qty - $o['qty'];

                DB::table('produk')
                    ->where('id', $o['produk_id'])
                    ->update([
                        'qty' => $qty,
                    ]);
            }

            DB::table('order')
                ->insert([
                    'orderId' => $orderId,
                    'tanggal_order' => $currentTime->format('Y-m-d H:i:s'),
                    'status' => 'belum_lunas',
                    'user' => $user->id,
                    'total' => $req->total,
                ]);

            DB::table('order_detail')
                ->insert([
                    $orderDetails,
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

    public function updateStatus(Request $req)
    {
        try {
            DB::table('order')
                ->where('id', $req->id)
                ->insert([
                    'status' => 'lunas',
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

    public function order(Request $req)
    {
        $user = json_decode($req->session()->get('sessionUser'));

        return view('admin.order.index', [
            'user' => $user,
        ]);
    }

    public function orderDetail(Request $req, $id)
    {
        $user = json_decode($req->session()->get('sessionUser'));

        return view('admin.order.detail', [
            'user' => $user,
            'id' => $id,
        ]);
    }

    public function orderBukti(Request $req, $id){
        $user = json_decode($req->session()->get('sessionUser'));

        return view('admin.order.bukti', [
            'user' => $user,
            'id' => $id,
        ]);
    }
}
