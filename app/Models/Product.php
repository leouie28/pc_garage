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

    protected $appends = [
        'rates'
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

    // public function sku_profile()
    // {
    //     return $this->belongsToMany(SkuProfile::class, 'product_id');
    // }
    
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

    public function rating()
    {
        return $this->feedback()->whereNotNull('rating');
    }

    public function getRatesAttribute()
    {
        if($this->rating->count()>0){
            $total = $this->rating->sum('rating') / $this->rating->count();
            return $total;
        }else{
            return 0;
        }
    }

    // public function similar()
    // {
    //     return $this->categories();
    // }
}
