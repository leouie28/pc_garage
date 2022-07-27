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
            'stocks' => 3,
            'product_id' => 3
        ]);

        Stock::create([
            'sku' => 'JL83OP2',
            'stocks' => 4,
            'product_id' => 3
        ]);
    }
}
