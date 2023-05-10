<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Http\Requests\LoanRequest;
use App\Models\book;
use App\Models\published;
use App\Models\current_loan;
use Illuminate\Http\Request;


class BookController extends Controller
{
    
    function AddBook(BookRequest $request)
    {
        $data = $request->validated();
        $book = book::create($data);
        if ($book) {
            error_log($book);
            $author = ["book_id"=>$book["book_id"],"author_id"=>(int)$request["publisher_id"]];
            if($author){
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

    function LoanBook(LoanRequest $request,$id){
        $data = $request->validated();
        $loan = current_loan::create($data);
        if($loan){
            return response("Loan Created Succesfully", 200);
    } else {
        return response("Error creating the loan", 400);
    }
    }



}
