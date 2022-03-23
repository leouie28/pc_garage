<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Company extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable=[
        'name',
        'phone',
        'address',
        'email',
        'password',
        'status',
    ];
    protected $hidden = [
        'password',
    ];
    public function employees()
    {
        return $this->hasmany(Employee::class);
    }
    public function products()
    {
        return $this->hasmany(Product::class);
    }
    public function categories()
    {
        return $this->hasmany(Category::class);
    }
    public function customers()
    {
        return $this->belongsToMany(Customer::class);
    }
}
