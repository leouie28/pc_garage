<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    use HasFactory;
    protected $table = 'order_product';
    protected $fillable =[

        'status',
        'quantity',
        'price',
        'product_id',
        'order_id',
        'option_id',
    ];
    public function orders()
    {
        return $this->belongsto(Order::class, 'order_id', 'id');
    }
    public function products()
    {
        return $this->belongsto(Product::class, 'product_id', 'id');
    }
    public function options()
    {
        return $this->belongsto(Option::class, 'option_id', 'id');
    }
}
