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
                if(Auth::guard('admin')->user()){
                    $admin = Auth::guard('admin')->user();
                    $reads = $admin->notification->where('read_at', null);
                    foreach($reads as $read){
                        Notification::where('id', $read->id)->update(['read_at' => Carbon::now()]);
                    }
                }elseif(Auth::guard('web')->user()){
                    $user = Auth::guard('web')->user();
                    $reads = $user->notification->where('read_at', null);
                    foreach($reads as $read){
                        Notification::where('id', $read->id)->update(['read_at' => Carbon::now()]);
                    }
                }
            }
        }catch(Exception $e){
            return $e->getMessage();
        }
    }
}
