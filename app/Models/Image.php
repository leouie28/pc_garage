<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable=[
        'filename',
        'product_id',
    ];
    public function products()
    {
        return $this->belongsto(Product::class, 'product_id', 'id');
    }
}
