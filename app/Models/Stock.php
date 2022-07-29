<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = [
        'sku',
        'stocks',
        'product_id',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    
    }

    public function sku()
    {
        return $this->belongsTo(SkuProfile::class);
    }

    public function orderProduct()
    {
        return $this->hasMany(OrderProduct::class, 'stock_id');
    }
}
