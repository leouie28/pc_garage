<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [

        'status',
        'total',
        'order_qty',
        'payment_id',
        'option_id',
        'customer_id',
        'employee_id'        
    ];
    public function payments()
    {
        return $this->belongsto(Payment::class, 'payment_id', 'id');
    }
    public function options()
    {
        return $this->belongsto(Option::class, 'option_id', 'id');
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
        return $this->belongsToMany(Product::class, 'order_product')
            ->withPivot('quantity', 'price')
            ->withTimestamps();
    }
    public function order_product()
    {
        return $this->hasMany(OrderProduct::class);
    }
}
