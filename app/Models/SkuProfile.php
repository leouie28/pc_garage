<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkuProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'sku_code',
        'name',
    ];

    protected $with = [
        'products',
        // 'prods',
    ];

    public function products()
    {
        return $this->hasMany(Stock::class, 'sku', 'sku_code');
    }

    // public function prods()
    // {
    //     return $this->hasManyThrough(
    //         Product::class,
    //         Stock::class,
    //         'sku',
    //         'sku_code',
    //     );
    // }
}
