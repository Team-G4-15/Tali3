<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = [
            ['en', 'English'],
            ['fr', 'French'],
            ['es', 'Spanish'],
            ['de', 'German'],
            ['it', 'Italian'],
        ];

        foreach ($languages as $language) {
            DB::table('language')->insert([
                'language_code' => $language[0],
                'language' => $language[1],
            ]);
        }
    }
}
