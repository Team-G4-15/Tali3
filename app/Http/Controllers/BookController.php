<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Http\Requests\LoanRequest;
use App\Models\book;
use App\Models\book_metadata;
use App\Models\published;
use App\Models\current_loan;
use App\Models\copy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class BookController extends Controller
{


    private static $searchFileds = [
        'title',
        'isbn',
        'description',
        'keywords',
        'language_code',
        'location_id',
        'field_name',
        'vendor_name',
        'vendor_email',
        'publish_date',
        'edition',
        'field_name',
        'type',
        'quantity',
        'author_name',
    ];

    function getPaginateBooks(Request $request)
    {

        $offset = $request->query("offset");
        $pageSize = $request->query("pageSize");
        $Books = DB::table('published')
            ->leftjoin('book', 'published.book_id', '=', 'book.book_id')
            ->leftjoin('author', 'published.author_id', '=', 'author.author_id')
            ->leftjoin("location", "book.location_id", "=", "location.location_id")
            ->select('book.*', 'book.book_id as id', 'location.aisle', 'location.shelf', DB::raw('GROUP_CONCAT(author.author_name SEPARATOR ", ") as author'))
            ->selectRaw("CONCAT(location.shelf, '-', location.aisle) as location")
            ->selectRaw('IF(quantity > 0, "Available", "Not Available") as availability')
            ->groupBy(
                'book.book_id',
                'book.title',
                'location.aisle',
                'location.shelf',
                'book.quantity',
                'author.author_name',
                'book.keywords',
                'book.description',
                'book.type',
                'book.isbn',
                'book.location_id',
                'book.language_code',
                'book.vendor_id',
                'book.field_name',
                'book.edition',
                'book.publish_date',
                'book.created_at',
                'book.updated_at'
            )->paginate($pageSize ?? 100, ['*'], 'page', $offset ?? 0);
        return $Books;
    }

    function UpdateBook(BookRequest $request)
    {
        $data = $request->validated();
        $books = new Book();
        $published = new Published();
        $update = $books->update($data);
        if ($update) {
            $book = book::findOrFail($data);
            error_log($book);
            $author = ["book_id" => $book["book_id"], "author_id" => (int) $request["publisher_id"]];
            if ($author) {
                $published->update($author);
            }
            return response($book, 200);
        } else {
            return response("Error updating the book", 400);
        }
    }

    function AddBook(BookRequest $request)
    {
        $data = $request->validated();
        $book = book::create($data);
        if ($book) {
            error_log($book);
            $author = ["book_id" => $book["book_id"], "author_id" => (int) $request["publisher_id"]];
            if ($author) {
                published::create($author);
            }
            for ($i = 1; $i <= $book["quantity"]; $i++) {
                $copy_data = ["book_id" => $book["book_id"], "copy_number" => $i, "reception_date" => now()];
                if ($copy_data) {
                    copy::create($copy_data);
                }
            }
            $latest_book_metadata = DB::table('book_metadata')->latest('created_at')->first();
            $latest_book_metadata_array = get_object_vars($latest_book_metadata);
            $book_metadata = [
                "total_books" => ($latest_book_metadata_array["total_books"] + $book["quantity"]),
                "available_books" => ($latest_book_metadata_array["available_books"] + $book["quantity"]),
                "burrowed_books" => $latest_book_metadata_array["burrowed_books"],
                "damaged_books" => $latest_book_metadata_array["damaged_books"],
                "lost_books" => $latest_book_metadata_array["lost_books"]
            ];
            if ($book_metadata) {
                book_metadata::create($book_metadata);
            }
            return response($book, 200);
        } else {
            return response("Error creating the book", 400);
        }
    }

    function DeleteBook($id)
    {
        $book = book::findOrFail($id);
        $book->delete();
        return response("Book Successfully deleted", 200);
    }

    function LoanBook(LoanRequest $request)
    {
        $data = $request->validated();
        $loan = current_loan::create($data);
        $book = book::findOrFail($data["book_id"]);
        if ($loan) {
            $latest_book_metadata = DB::table('book_metadata')->latest('created_at')->first();
            $latest_book_metadata_array = get_object_vars($latest_book_metadata);
            $book_metadata = [
                "total_books" => ($latest_book_metadata_array["total_books"]),
                "available_books" => ($latest_book_metadata_array["available_books"] - 1),
                "burrowed_books" => $latest_book_metadata_array["burrowed_books"] + 1,
                "damaged_books" => $latest_book_metadata_array["damaged_books"],
                "lost_books" => $latest_book_metadata_array["lost_books"]
            ];
            if ($book_metadata) {
                book_metadata::create($book_metadata);
            }
            return response("Loan Created Succesfully", 200);
        } else {
            return response("Error creating the loan", 400);
        }
    }


    function SearchBook(Request $request)
    {
        // here is an example of how the search will be
        $query = DB::table('published')
            ->leftJoin('book', 'published.book_id', '=', 'book.book_id')
            ->leftJoin('field', 'book.field_name', '=', 'field.field_name')
            ->leftJoin('author', 'published.author_id', '=', 'author.author_id')
            ->leftJoin('location', 'book.location_id', '=', 'location.location_id')
            ->leftJoin('vendor', 'book.vendor_id', '=', 'vendor.vendor_id')
            ->selectRaw("CONCAT(location.shelf, '-', location.aisle) as location")
            ->selectRaw('IF(quantity > 0, "Available", "Not Available") as availability')
            ->select('book.*', 'book.book_id as id', 'vendor.name', 'vendor.email', 'location.aisle', 'location.shelf', DB::raw('GROUP_CONCAT(author.author_name SEPARATOR ", ") as author'))
            ->groupBy('book.book_id');

        foreach ($request->query() as $field => $value) {
            if (!in_array($field, BookController::$searchFileds) || empty($value)) {
                continue;
            } else
                $query->where($field, 'like', "%$value%");
        }

        $pageSize = $request->query('per_page', 100);
        $books = $query->paginate($pageSize, ['*'], 'page', $request->query('page', 1));

        return $books;

    }




}
