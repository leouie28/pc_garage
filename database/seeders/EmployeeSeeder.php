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

        Employee::create([
            'name' =>'alexis john',
            'email' =>'test11@gmail.com',
            'password' =>bcrypt('123456'),//password
            'phone' => '09151464404',
            'position' => 'Waiter',
            'status' => '0',
            'company_id' => '2',
        ]);
    }
}
