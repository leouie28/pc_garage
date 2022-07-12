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
        ]);
        Category::create([
            'name' => 'Processor',
        ]);
        Category::create([
            'name' => 'Storage',
        ]);
    }
}
