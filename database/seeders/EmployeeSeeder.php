<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Employee::create([
            'name' =>'Margielyn Bronola',
            'email' =>'margiebronola21@gmail.com',
            'password' =>bcrypt('123456'),//password
            'phone' => '09512318472',
            'position' => 'Waiter',
            'status' => '0',
            'company_id' => '1',
        ]);
        Employee::create([
            'name' =>'test',
            'email' =>'employee@gmail.com',
            'password' =>bcrypt('123456'),//password
            'phone' => '09512318222',
            'position' => 'Chef',
            'status' => '0',
            'company_id' => '2',
        ]);
        Employee::create([
            'name' =>'Margielyn',
            'email' =>'marg@gmail.com',
            'password' =>bcrypt('123456'),//password
            'phone' => '09512118222',
            'position' => 'Cashier',
            'status' => '0',
            'company_id' => '3',
        ]);
    }
}
