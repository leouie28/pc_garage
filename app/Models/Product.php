<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable=[
        'name',
        'description',
        'stocks',
        'price',
    ];

    protected $with = [
        'categories',
        'images',
        'orders'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class, 'product_id');
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class);
    }

    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }
}
