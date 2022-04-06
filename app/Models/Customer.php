<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'phone',
        'email',
    ];
    public function orders()
    {
        return $this->hasmany(Order::class);
    }
    public function companies()
    {
        return $this->belongsToMany(Company::class, 'company_customer');
    }
}
