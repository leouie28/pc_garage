<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employee extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // protected $guard='employee';
    protected $fillable=[
        'first_name',
        'last_name',
        'phone',
        'email',
        'password',
    ];
    protected $hidden = [
        'password',
    ];
    
}