<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function adminNotification()
    {
        $admin = Admin::first();

        return $admin->notifications;
    }
}
