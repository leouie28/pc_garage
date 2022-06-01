<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::create([
            'name' =>'test',
            'email' =>'admintest@gmail.com',
            'phone' => '09512318472',
            'barangay' => 'cahumpan',
            'city' => 'calbayog',
            'province' => 'samar',
            'password' =>bcrypt('123456'),//password
            'status' =>'0',
        ]);
        Company::create([
            'name' =>'admin',
            'email' =>'testtest@gmail.com',
            'phone' => '09512318111',
            'barangay' => 'obrero',
            'city' => 'calbayog',
            'province' => 'samar',
            'password' =>bcrypt('123456'),//password
            'status' =>'0',
        ]);
        Company::create([
            'name' =>'Mang Inasal',
            'email' =>'inasal@gmail.com',
            'phone' => '09512118111',
            'barangay' => 'awang',
            'city' => 'calbayog',
            'province' => 'samar',
            'password' =>bcrypt('123456'),//password
            'status' =>'0',
        ]);
    }
}
