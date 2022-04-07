<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name'=>'Cake',
            'description'=>'Marasa',
            'price'=>'199',
            'reference'=>'waray',
            'stock'=>'100',
            'comment'=>'malain',
            'category_id'=>'1',
            'company_id'=>'1',
        ]);
        

    }
}
