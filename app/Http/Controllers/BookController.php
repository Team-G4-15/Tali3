<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Http\Requests\LoanRequest;
use App\Models\book;
use App\Models\published;
use App\Models\current_loan;
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
            ->groupBy('book.book_id')->paginate($pageSize ?? 100, ['*'], 'page', $offset ?? 0);
        return $Books;
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

    function LoanBook(LoanRequest $request, $id)
    {
        $data = $request->validated();
        $loan = current_loan::create($data);
        if ($loan) {
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
            ->select('book.*', 'book.book_id as id', 'vendor.vendor_name', 'vendor.vendor_email', 'location.aisle', 'location.shelf', DB::raw('GROUP_CONCAT(author.author_name SEPARATOR ", ") as author'))
            ->groupBy('book.book_id');

        foreach ($request->query() as $field => $value) {
            if (!in_array($field, BookController::$searchFileds) || empty($value)) {
                continue;
            }
            else
                $query->where($field, 'like', "%$value%");
        }

        $pageSize = $request->query('per_page', 100);
        $books = $query->paginate($pageSize, ['*'], 'page', $request->query('page', 1));

        return $books;

    }




}
