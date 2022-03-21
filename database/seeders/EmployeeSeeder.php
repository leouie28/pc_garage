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
            'first_name' =>'rence',
            'last_name' =>'bagaan',
            'phone' => '09512318472',
            'email' =>'florence@gmail.com',
            'password' =>bcrypt('123456'),//password
        ]);
    }
}
