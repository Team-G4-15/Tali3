<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;

use App\Models\Book;
use App\Models\publisher;
use Illuminate\Http\Request;


class BookController extends Controller
{

    // thisb s

    function AddBook(BookRequest $request)
    {
        $data = $request->validated();
        $book = Book::create($data);
        if ($book) {

            return response("Book Created Succesfully", 200);
        } else {
            return response("Error creating the book ", 400);
        }
    }

    function DeleteBook($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return response("Book Successfully deleted", 200);
    }


}
