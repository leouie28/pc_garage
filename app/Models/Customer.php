<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Customer extends Authenticatable
{
    use HasFactory;

    protected $fillable=[
        'first_name',
        'last_name',
        'gender',
        'birthday',
        'address',
        'phone',
        'email',
        'password',
        'status',
    ];

    protected $hidden = [
        'password'
    ];

    protected $with = [
        // 'orders',
    ];
    
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }

}
