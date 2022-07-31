<?php

namespace Database\Seeders;

use App\Models\SkuProfile;
use Illuminate\Database\Seeder;

class SkuProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sku = new SkuProfile([
            'sku_code' => 'TEST7357',
            'name' => 'Test Corp.'
        ]);
        $sku->save();

        $sku = new SkuProfile([
            'sku_code' => 'JL83OP2',
            'name' => 'Company Testing.'
        ]);
        $sku->save();
    }
}
