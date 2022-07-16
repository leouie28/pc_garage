<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

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
        //     'first_name' => 'Customer',
        //     'last_name' => 'Testing',
        //     'Gender' => 'Male',
        //     'birthday' => '2022-02-10',
        //     'address' => 'Calbayog City',
        //     'phone' => '0983743746',
        //     'email' => 'customer@gmail.com',
        //     'password' => bcrypt('123'),
        //     'status' => true,
        // ]);

        DB::table('customers')->insert([
            'first_name' => Str::random(5),
            'last_name' => Str::random(5),
            'Gender' => rand(0, 1) ? 'Male' : 'Female',
            'birthday' => '2000-02-10',
            'address' => 'Calbayog City',
            'phone' => '09'.random_int(000000000, 999999999),
            'email' => Str::random(5).'@gmail.com',
            'password' => bcrypt('123'),
            'status' => true,
        ]);
    }
}
