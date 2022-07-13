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
        Customer::create([
            'first_name' => 'Customer',
            'last_name' => 'Testing',
            'Gender' => 'Male',
            'birthday' => '2022-02-10',
            'address' => 'Calbayog City',
            'phone' => '0983743746',
            'email' => 'customer@gmail.com',
            'password' => bcrypt('123'),
            'status' => true,
        ]);
    }
}
