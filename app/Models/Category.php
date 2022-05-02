<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [

        'name',
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
    public function products()
    {
        return $this->hasmany(Product::class);
    }
}
