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
                'ISBN' => '17890',
                'desc' => 'Description for Book One',
                'keywords' => 'Keyword1, Keyword2',
                'Quantity' => 10,
                'lang_id' => 1,
                'location_id' => 1,
                'field_id' => 1,
                'vendor_id' => 1,
                'publish_date' => '2022-01-01',
                'edition' => 'First Edition',
            ],
            [
                'title' => 'Book Two',
                'ISBN' => '04321',
                'desc' => 'Description for Book Two',
                'keywords' => 'Keyword3, Keyword4',
                'Quantity' => 20,
                'lang_id' => 2,
                'location_id' => 2,
                'field_id' => 2,
                'vendor_id' => 2,
                'publish_date' => '2022-02-01',
                'edition' => 'Second Edition',
            ],
            [
                'title' => 'The Great Gatsby',
                'ISBN' => '93273565',
                'desc' => 'A story of decadence and excess in the Jazz Age, told through the eyes of narrator Nick Carraway.',
                'keywords' => 'Fitzgerald, Jazz Age, Roaring Twenties',
                'Quantity' => 5,
                'lang_id' => 1,
                'location_id' => 1,
                'field_id' => 1,
                'vendor_id' => 1,
                'publish_date' => '1925-04-10',
                'edition' => 'First Edition',
            ],
            [
                'title' => 'To Kill a Mockingbird',
                'ISBN' => '91120084',
                'desc' => 'A novel set in the Deep South during the 1930s, dealing with the themes of racism and injustice.',
                'keywords' => 'Harper Lee, Southern Gothic, Civil Rights Movement',
                'Quantity' => 10,
                'lang_id' => 2,
                'location_id' => 2,
                'field_id' => 2,
                'vendor_id' => 2,
                'publish_date' => '1960-07-11',
                'edition' => 'First Edition',
            ],
            [
                'title' => '1984',
                'ISBN' => '91524935',
                'desc' => 'A dystopian novel set in a totalitarian society, where individualism and independent thinking are forbidden.',
                'keywords' => 'George Orwell, dystopia, totalitarianism',
                'Quantity' => 8,
                'lang_id' => 1,
                'location_id' => 3,
                'field_id' => 3,
                'vendor_id' => 3,
                'publish_date' => '1949-06-08',
                'edition' => 'First Edition',
            ],
            [
                'title' => 'Pride and Prejudice',
                'ISBN' => '91439518',
                'desc' => 'A classic novel of manners, romance, and social commentary set in early 19th century England.',
                'keywords' => 'Jane Austen, Regency Era, social class',
                'Quantity' => 6,
                'lang_id' => 2,
                'location_id' => 1,
                'field_id' => 4,
                'vendor_id' => 4,
                'publish_date' => '1813-01-28',
                'edition' => 'First Edition',
            ],
            [
                'title' => 'The Hitchhiker\'s Guide to the Galaxy',
                'ISBN' => '95391803',
                'desc' => 'A comedic science fiction series following the misadventures of an unwitting human and his alien friend as they travel through space.',
                'keywords' => 'Douglas Adams, science fiction, comedy',
                'Quantity' => 12,
                'lang_id' => 1,
                'location_id' => 2,
                'field_id' => 5,
                'vendor_id' => 5,
                'publish_date' => '1979-10-12',
                'edition' => 'First Edition',
            ],
            // Add more books as needed
        ];

        foreach ($books as $book) {
            Book::create($book);
        }

        //
    }
}
