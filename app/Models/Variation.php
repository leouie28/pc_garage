<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variation extends Model
{
    use HasFactory;
    protected $fillable= [

        'name',
        'product_id',
    ];
    public function options()
    {
        return $this->hasmany(Option::class);
    }
    public function products()
    {
        return $this->belongsto(Product::class);
    }
}
