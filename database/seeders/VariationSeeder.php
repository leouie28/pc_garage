<?php

namespace Database\Seeders;

use App\Models\Variation;
use Illuminate\Database\Seeder;

class VariationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Variation::create([
            'name' =>'Large',
            'product_id' => '1',
        ]);
        Variation::create([
            'name' =>'Small',
            'product_id' => '1',
        ]);
        Variation::create([
            'name' =>'Large',
            'product_id' => '2',
        ]);
        Variation::create([
            'name' =>'Small',
            'product_id' => '2',
        ]);
        Variation::create([
            'name' =>'Large',
            'product_id' => '6',
        ]);
        Variation::create([
            'name' =>'Small',
            'product_id' => '6',
        ]);
    }
}
