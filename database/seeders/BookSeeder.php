<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'Book One',
                'isbn' => '17890',
                'description' => 'Description for Book One',
                'keywords' => 'Keyword1, Keyword2',
                'quantity' => 10,
                'language_code' => "en",
                'type' => 'c',

                'location_id' => 1,
                'field_name' => 1,
                'vendor_id' => 1,
                'publish_date' => '2022-01-01',
                'edition' => 'First Edition',
                'field_name' => 'Artificial Intelligence'
            ],
            [
                'title' => 'Book Two',
                'isbn' => '04321',
                'description' => 'Description for Book Two',
                'keywords' => 'Keyword3, Keyword4',
                'quantity' => 20,
                'language_code' => "en",
                'location_id' => 2,
                'field_name' => 2,
                'type' => 'c',
                'vendor_id' => 2,
                'publish_date' => '2022-02-01',
                'edition' => 'Second Edition',
                'field_name' => 'Artificial Intelligence'

            ],
            [
                'title' => 'The Great Gatsby',
                'isbn' => '93273565',
                'type' => 'c',
                'description' => 'A story of decadence and excess in the Jazz Age, told through the eyes of narrator Nick Carraway.',
                'keywords' => 'Fitzgerald, Jazz Age, Roaring Twenties',
                'quantity' => 5,
                'language_code' => "en",
                'location_id' => 1,
                'field_name' => 1,
                'vendor_id' => 1,
                'publish_date' => '1925-04-10',
                'edition' => 'First Edition',
                'field_name' => 'Artificial Intelligence'
            ],
            [
                'title' => 'To Kill a Mockingbird',
                'isbn' => '91120084',
                'description' => 'A novel set in the Deep South during the 1930s, dealing with the themes of racism and injustice.',
                'keywords' => 'Harper Lee, Southern Gothic, Civil Rights Movement',
                'quantity' => 10,
                'type' => 'c',
                'language_code' => "en",
                'location_id' => 2,
                'field_name' => 2,
                'vendor_id' => 2,
                'publish_date' => '1960-07-11',
                'edition' => 'First Edition',
                'field_name' => 'Artificial Intelligence',
            ],
            [
                'title' => '1984',
                'isbn' => '91524935',
                'description' => 'A dystopian novel set in a totalitarian society, where individualism and independent thinking are forbidden.',
                'keywords' => 'George Orwell, dystopia, totalitarianism',
                'quantity' => 8,
                'language_code' => "en",
                'location_id' => 3,
                'field_name' => 3,
                'vendor_id' => 3,
                'publish_date' => '1949-06-08',
                'edition' => 'First Edition',
                'field_name' => 'Artificial Intelligence',
                'type' => 'c'

            ],
            [
                'title' => 'Pride and Prejudice',
                'isbn' => '91439518',
                'description' => 'A classic novel of manners, romance, and social commentary set in early 19th century England.',
                'keywords' => 'Jane Austen, Regency Era, social class',
                'quantity' => 6,
                'language_code' => "en",
                'location_id' => 1,
                'field_name' => 4,
                'vendor_id' => 4,
                'publish_date' => '1813-01-28',
                'edition' => 'First Edition',
                'field_name' => 'Artificial Intelligence',
                'type' => 'c',

            ],
            [
                'title' => 'The Hitchhiker\'s Guide to the Galaxy',
                'isbn' => '95391803',
                'description' => 'A comedic science fiction series following the misadventures of an unwitting human and his alien friend as they travel through space.',
                'keywords' => 'Douglas Adams, science fiction, comedy',
                'quantity' => 12,
                'language_code' => "en",
                'location_id' => 2,
                'field_name' => 5,
                'vendor_id' => 5,
                'publish_date' => '1979-10-12',
                'edition' => 'First Edition',
                'field_name' => 'Artificial Intelligence',
                'type' => 'c',

            ],
            // Add more books as needed
        ];

        foreach ($books as $book) {
            Book::create($book);
        }

        //
    }
}
