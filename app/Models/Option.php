<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    use HasFactory;
    protected $fillable=[
      'addprice',
      'stock',
      'name',
      'variation_id',  
    ];
    public function variations()
    {
        return $this->belongsto(Variation::class, 'variation_id', 'id');
    }
}
