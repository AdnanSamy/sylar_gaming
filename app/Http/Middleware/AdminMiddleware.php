<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $req, Closure $next)
    {
        if (!$req->session()->has('sessionUser')) {
            return redirect('/login');
        } else {
            $user = json_decode($req->session()->get('sessionUser'));
            if ($user->role != 'admin') {
                return redirect('/login');
            }
        }

        return $next($req);
    }
}