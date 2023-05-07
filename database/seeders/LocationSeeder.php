<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $locations = [
            ['aisle' => 'A', 'shelf' => '1', 'type' => 'book'],
            ['aisle' => 'B', 'shelf' => '2', 'type' => 'magazine'],
            ['aisle' => 'C', 'shelf' => '3', 'type' => 'newspaper'],
            ['aisle' => 'D', 'shelf' => '4', 'type' => 'reference'],
            ['aisle' => 'E', 'shelf' => '5', 'type' => 'audio'],
        ];

        foreach ($locations as $location) {
            DB::table('location')->insert([
                'aisle' => $location['aisle'],
                'shelf' => $location['shelf'],
                'type' => $location['type'],
            ]);
        }
    }
}
