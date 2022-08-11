<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'customer_id',
        'order_id',
        'rating',
        'text',
    ];

    protected $with = [
        'images',
        // 'customer'
    ];

    protected $appends = [
        'CustomerName',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imagable');
    }

    public function getCustomerNameAttribute()
    {
        return $this->customer->first_name . ' ' . $this->customer->last_name;
    }
}
