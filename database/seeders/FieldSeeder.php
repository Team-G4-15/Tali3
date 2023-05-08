<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fields = [
            ['Artificial Intelligence', 'AI, machine learning, neural networks, robotics'],
            ['Computer Science', 'programming, algorithms, data structures, software engineering'],
            ['Mathematics', 'calculus, linear algebra, statistics, probability'],
            ['Physics', 'mechanics, electromagnetism, quantum mechanics, thermodynamics'],
            ['Biology', 'genetics, ecology, microbiology, physiology'],
        ];

        foreach ($fields as $field) {
            DB::table('field')->insert([
                'field_name' => $field[0],
                'field_keywords' => $field[1],
            ]);
        }
    }
}
