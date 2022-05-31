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
        'name' =>'Beakfast',
        'company_id' => '1',
    ]);
    Category::create([
        'name' =>'Lunch',
        'company_id' => '1',
    ]);
    Category::create([
        'name' =>'Dinner',
        'company_id' => '1',
    ]);
    Category::create([
        'name' =>'Beakfast',
        'company_id' => '2',
    ]);
    Category::create([
        'name' =>'Lunch',
        'company_id' => '2',
    ]);
    Category::create([
        'name' =>'Dinner',
        'company_id' => '2',
    ]);
    }
}
