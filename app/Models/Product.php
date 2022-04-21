<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
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
    // public function users()
    // {
    //     return $this->belongsto(User::class); //changes
    // }
    public function categories()
    {
        return $this->belongsto(Category::class);
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_product')
            ->withPivot('quantity', 'price')
            ->withTimestamps();
    }
    public function variations()
    {
        return $this->hasmany(Variation::class);
    }
}
