<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class OrderProduct extends Pivot
{
    use HasFactory;

    // public function sold()
    // {
    //     return $this->belongsTo(Product::class)
    //     ->where('status', 1);
    // }
}
