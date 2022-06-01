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
        ]);
        Variation::create([
            'name' =>'Small',
        ]);
        Variation::create([
            'name' =>'Large',
        ]);
        Variation::create([
            'name' =>'Small',
        ]);
        Variation::create([
            'name' =>'Large',
        ]);
        Variation::create([
            'name' =>'Small',
        ]);
    }
}
