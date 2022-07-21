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
        'price',
    ];

    protected $with = [
        // 'categories',
        'images',
        'stocks',
        // 'order',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imagable');
    }

    public function stocks()
    {
        return $this->hasMany(Stock::class, 'product_id');
    }
    
    public function order()
    {
        return $this->belongsToMany(Order::class)->withPivot(['quantity']);
    }

    public function sold()
    {
        return $this->order()->where('status', '=', 4);
    }

    public function toDeliver()
    {
        return $this->order()->where('status', '=', 2)->orWhere('status', '=', 3);
    }

    public function pending()
    {
        return $this->order()->where('status', '=', 1);
    }

    public function canceled()
    {
        return $this->order()->where('status', '=', 0);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }
}
