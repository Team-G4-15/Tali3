<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\university;

class UniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        university::create([
            'name' => 'Example University',
            'email' => 'example@example.com',
            'address' => 'Example Address',
            'phone_number' => '1234567890',
        ]);

        // You can add more seed data for the university model if desired
    }
}
