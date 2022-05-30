<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $table = 'carts';
    protected $fillable =[

        'status',
        'quantity',
        'price',
        'total',
        'product_id',
        'option_id',
        'customer_id',
        'employee_id',
        'comment',
    ];
    public function customer()
    {
        return $this->belongsto(Customer::class, 'customer_id', 'id');
    }
    public function employees()
    {
        return $this->belongsto(Employee::class, 'employee_id', 'id');
    }
    public function options()
    {
        return $this->belongsto(Option::class, 'option_id', 'id');
    }
    public function products()
    {
        return $this->belongsto(Product::class, 'product_id', 'id');
    }
    public function orders()
    {
        return $this->belongsto(Order::class, 'order_id', 'id');
    }
}
