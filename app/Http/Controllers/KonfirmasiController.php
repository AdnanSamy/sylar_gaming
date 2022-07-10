<?php

namespace App\Http\Controllers;

use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class KonfirmasiController extends Controller
{
    public function add(Request $req, $orderId)
    {
        DB::beginTransaction();
        try {
            $currentTime = new DateTime('now', new DateTimeZone('Asia/Jakarta'));

            $filename = $orderId . $currentTime->format('Ymdhis') . '.' . $req->file('bukti')->extension();

            Storage::put('\public\\' . $filename, file_get_contents($req->file('bukti')));

            DB::table('konfirmasi')
                ->insert([
                    'order_id' => $orderId,
                    'tanggal' => $currentTime->format('Y-m-d H:i:s'),
                    'bukti' => $filename,
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
}
