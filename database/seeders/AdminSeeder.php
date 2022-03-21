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
            'first_name' =>'ubi',
            'last_name' =>'admin',
            'email' =>'ubiadmin@admin.com',
            'password' =>bcrypt('admin123'),//password
        ]);
    }
}
