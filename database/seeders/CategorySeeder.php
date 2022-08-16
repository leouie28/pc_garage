<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $part = [
            'motherboard',
            'cpu/processor',
            'ram/memory',
            'hard drive/storage',
            'power supply',
            'gpu/graphics card',
            'peripherals',
        ];
        
        foreach($part as $cat) {
            Category::create([
                'name' => $cat,
            ]);
        }
    }
}
