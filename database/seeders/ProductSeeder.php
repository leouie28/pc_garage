<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' =>'French fries',
            'description' =>'Yummy foods basta libre',
            'price' =>'99.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'lame kaayo',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Burger',
            'description' =>'Mas marasa pa kay crush',
            'price' =>'45.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'ulala sa sarap',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Pasta',
            'description' =>'Pasta ini',
            'price' =>'55.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'marasa',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Spaghetti',
            'description' =>'test test',
            'price' =>'12.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'test',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Macaroni Salad',
            'description' =>'test test',
            'price' =>'12.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'test',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Halo Halo',
            'description' =>'test test',
            'price' =>'12.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'test',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Milk Tea',
            'description' =>'lammme',
            'price' =>'75.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'rasaha',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Drinks',
            'description' =>'Tanggal Uhaw',
            'price' =>'12.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'burrrp',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Puto',
            'description' =>'made from rice',
            'price' =>'02.00',
            'reference' => 'calbayog',
            'stock' => '200',
            'comment' => 'maboga',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '1',
        ]);
        Product::create([
            'name' =>'Philippines Adobo',
            'description' =>'Masarap',
            'price' =>'55.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'delisyoso',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '2',
        ]);
        Product::create([
            'name' =>'Sinigang',
            'description' =>'Sarap',
            'price' =>'60.00',
            'reference' => 'test',
            'stock' => '100',
            'comment' => 'maaslom',
            'is_service' => '0',
            'category_id' => '1',
            'company_id' => '2',
        ]);
    }
}
