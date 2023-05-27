<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoanRequest;
use App\Models\copy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\current_loan;

class CurrentLoan extends Controller
{

    public function getAllCurrentLoans(Request $request)
    {
        $current_loans = DB::table("current_loan")->leftjoin('book', 'current_loan.book_id', '=', 'book.book_id')->select('book.title  as book_title', 'book.book_id', 'current_loan.*', 'current_loan.loan_id as id', 'current_loan.patron_email as member_email')->get();
        return response()->json($current_loans);
    }


    public function addLoan(LoanRequest $request)
    {
        // get the number of loans for the this patron to check if he can loan more books

        $data = $request->validated();


        $count = current_loan::where(
            "patron_email",
            $data["patron_email"]
        )->count();

        // This depends on the settings
        if ($count == 3) {
            return response("You Have 3 Current Loans", status: 402);
        }
        $loan = current_loan::create($data);
        $copy = copy::where('book_id', $data['book_id'])
            ->where('copy_number', $data['copy_number'])
            ->first();
        if ($copy->is_loaned == 1) {
            return response("The current copy is not availlable ", status: 402);
        }
        $copy->is_loaned = 1;
        $copy->save();
        return response()->json($loan);
    }
}
