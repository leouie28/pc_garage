<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOrder extends Model
{
    use HasFactory;
    // protected $table = 'product_orders';
    protected $fillable = [
        'status',
        'quantity',
        'price',
        'product_id',
        'order_id',
        'option_id'
    ];
    public function orders()
    {
        return $this->belongsTo(Order::class);
    }
    public function products()
    {
        return $this->belongsTo(Product::class);
    }

}
