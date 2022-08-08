<?php

namespace Database\Seeders;

use App\Models\Stock;
use Illuminate\Database\Seeder;

class StockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Stock::create([
            'sku' => 'TEST7357',
            'stocks' => 22,
            'product_id' => 3
        ]);

        Stock::create([
            'sku' => 'JL83OP2',
            'stocks' => 10,
            'product_id' => 3
        ]);

        Stock::create([
            'sku' => 'JL83OP2',
            'stocks' => 22,
            'product_id' => 2
        ]);

        Stock::create([
            'sku' => 'JL83OP2',
            'stocks' => 20,
            'product_id' => 1
        ]);
    }
}
