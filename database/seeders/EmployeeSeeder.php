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
            'name' =>'rence',
            'email' =>'test@gmail.com',
            'password' =>bcrypt('123456'),//password
            'phone' => '09512318472',
            'position' => 'Waiter',
            'status' => '0',
            'company_id' => '1',
        ]);
    }
}
