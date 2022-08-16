<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Set extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'status'
    ];

    public function products()
    {
        return $this->morphedByMany(Product::class, 'settable');
    }

    public function dummyProducts()
    {
        return $this->morphedByMany(Product::class, 'settable');
    }
}
