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
            'email' =>'test@gmail.com',
            'phone' => '09512318472',
            'address' => 'calbayog city',
            'password' =>bcrypt('123456'),//password
            'status' =>'0',
        ]);
    }
}
