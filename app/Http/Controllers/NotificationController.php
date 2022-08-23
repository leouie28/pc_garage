<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Notification;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function adminNotification()
    {
        $admin = Auth::guard('admin')->user();

        return $admin->notification;
    }

    public function customerNotification()
    {
        $user = Auth::guard('web')->user();

        return $user->notification;
    }

    public function markRead(Request $request)
    {
        try{
            if($request->id){
                Notification::find($request->id)
                ->update(['read_at' => Carbon::now()]);
            }elseif($request->all){

            }
        }catch(Exception $e){
            return $e->getMessage();
        }
    }
}
