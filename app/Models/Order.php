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
        return $this->belongsto(Payment::class, 'payment_id', 'id');
    }
    public function customers()
    {
        return $this->belongsto(Customer::class, 'customer_id', 'id');
    }
    public function employees()
    {
        return $this->belongsto(Employee::class, 'employee_id', 'id');
    }
    public function products()
    {
        return $this->belongsToMany(Product::class)
            ->withPivot('quantity', 'price')
            ->withTimestamps();
    }
}