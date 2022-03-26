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
            'city' => 'cahumpan',
            'province' => 'cahumpan',
            'password' =>bcrypt('123456'),//password
            'status' =>'0',
        ]);
    }
}
