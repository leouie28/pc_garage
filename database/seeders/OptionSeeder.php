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
            'addprice' =>'50',
            'stock' =>'100',
            'name' =>'Cheese',
        ]);
        Option::create([
            'addprice' =>'50',
            'stock' =>'75',
            'name' =>'Ube',
        ]);
    }
}
