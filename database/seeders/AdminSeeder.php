<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
            'first_name' => 'Pc Garage',
            'last_name' => 'Admin',
            'email' => 'admin',
            'password' => bcrypt('123'),//password
        ]);
    }
}
