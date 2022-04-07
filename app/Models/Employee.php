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

    protected $fillable=[
        'name',
        'email',
        'password',
        'phone',
        'position',
        'status',
        'company_id',
    ];
    protected $hidden = [
        'password',
    ];
    public function companies()
    {
        return $this->belongsto(Company::class);
    }
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
    
}