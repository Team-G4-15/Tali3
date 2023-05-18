<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Http\Requests\LoanRequest;
use App\Models\book;
use App\Models\published;
use App\Models\current_loan;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class BookController extends Controller
{


    function getPaginateBooks(Request $request)
    {

        $offset = $request->query("offset");
        $pageSize = $request->query("pageSize");
        $Books = DB::table('published')
            ->join('book', 'published.book_id', '=', 'book.book_id')
            ->join('author', 'published.author_id', '=', 'author.author_id')
            ->select('book.*', DB::raw('GROUP_CONCAT(author.author_name SEPARATOR ", ") as author_names'))
            ->groupBy('book.book_id')->paginate($pageSize??25, ['*'], 'page', $offset??0);
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
            return response("Book Created Succesfully", 200);
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




}
