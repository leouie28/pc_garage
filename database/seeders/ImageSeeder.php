<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Image::create([
            'imagable_id' => 53,
            'imagable_type' => 'App\Models\Product',
            'file_name' => '20220721054537.jpeg',
        ]);

        Image::create([
            'imagable_id' => 52,
            'imagable_type' => 'App\Models\Product',
            'file_name' => '20220723061318.jpeg',
        ]);

        Image::create([
            'imagable_id' => 51,
            'imagable_type' => 'App\Models\Product',
            'file_name' => '20220725092831.jpeg',
        ]);
    }
}
