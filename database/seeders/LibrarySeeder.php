<?php

namespace Database\Seeders;

use App\Models\library;
use App\Models\university;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LibrarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        library::create([
            'name' => 'Example Library',
            'department' => 'Example Department',
            'university_id' => 1
        ]);
        //
    }
}
