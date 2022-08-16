<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DummyProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function sets()
    {
        return $this->morphToMany(Set::class, 'settable');
    }
}
