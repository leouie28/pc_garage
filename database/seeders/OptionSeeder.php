<?php

namespace Database\Seeders;
use App\Models\Option;
use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Option::create([
            'addprice'=>'100',
            'stock'=>'50',
            'name'=>'Cake',
            'variation_id'=>'1',  
        ]);
    }
}
