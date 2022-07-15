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
        Category::create([
            'name' => 'Case',
            'color' => 'primary',
        ]);
        Category::create([
            'name' => 'Processor',
            'color' => 'success',
        ]);
        Category::create([
            'name' => 'Storage',
            'color' => 'error',
        ]);
    }
}
