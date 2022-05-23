<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable =[

        'name',
        'description',
        'price',
        'reference',
        'stock',
        'comment',
        'is_service',
        'category_id',
        'company_id',
    ];
    public function companies()
    {
        return $this->belongsto(Company::class);
    }
    public function categories()
    {
        return $this->belongsto(Category::class);
    }
    public function orders()
    {
        return $this->belongsToMany(Order::class)
            ->withPivot('quantity', 'price')
            ->withTimestamps();
    }
}