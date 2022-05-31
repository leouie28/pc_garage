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
            'name' =>'rence',
            'email' =>'test@gmail.com',
            'phone' => '00000000000',
        ]);
        Customer::create([
            'name' =>'jason',
            'email' =>'employee@gmail.com',
            'phone' => '11111111111',
        ]);
        Customer::create([
            'name' =>'alexis',
            'email' =>'test@gmail.com',
            'phone' => '33333333333',
        ]);
        Customer::create([
            'name' =>'kenneth',
            'email' =>'employee@gmail.com',
            'phone' => '09512318222',
        ]);
        Customer::create([
            'name' =>'margie',
            'email' =>'test@gmail.com',
            'phone' => '09512318472',
        ]);
        Customer::create([
            'name' =>'ariel',
            'email' =>'employee@gmail.com',
            'phone' => '09512318222',
        ]);
        Customer::create([
            'name' =>'sean',
            'email' =>'test@gmail.com',
            'phone' => '09512318472',
        ]);
        Customer::create([
            'name' =>'patrick',
            'email' =>'employee@gmail.com',
            'phone' => '09512318222',
        ]);
        Customer::create([
            'name' =>'romnick',
            'email' =>'employee@gmail.com',
            'phone' => '09512318222',
        ]);
        Customer::create([
            'name' =>'mark',
            'email' =>'employee@gmail.com',
            'phone' => '09512318222',
        ]);
    }
}
