<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Customer::create([
        //     'name' =>'alexis',
        //     'email' =>'test@gmail.com',
        //     'phone' => '09512318472',
        // ]);
        Customer::create([
            'name' =>'jenua',
            'email' =>'test@gmail.com',
            'phone' => '09512318472',
        ]);
    }
}
