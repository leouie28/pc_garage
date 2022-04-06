<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [

        'total',
        'payment_id',
        'customer_id',
        'employee_id'        
    ];
    public function payments()
    {
        return $this->belongsto(Payment::class);
    }
    public function customers()
    {
        return $this->belongsto(Cutomer::class);
    }
    public function employees()
    {
        return $this->belongsto(Employee::class);
    }
    public function products()
    {
        return $this->belongsToMany(Product::class)
            ->withPivot('quantity', 'price')
            ->withTimestamps();
    }
}
