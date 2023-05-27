<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;


class StatisticsController extends Controller
{

    function getOverdue()
    {

        $PastOverDueBooks = DB::table('current_loan')->whereDate('due_date', '<', now())
        ->leftjoin('book', 'current_loan.book_id', '=', 'book.book_id')
        ->leftjoin('patron','current_loan.patron_email', '=','patron.patron_email')
        ->select('current_loan.due_date','book.title','patron.first_name','patron.last_name')->get();
        $loans = DB::table('current_loan')->count();
        $PastOverDueBooksCount = $PastOverDueBooks->count();

        return response(["overdueBooksCount" => $PastOverDueBooksCount, "overdueBooksArray" => $PastOverDueBooks, "TotalLoans" => $loans]);
    }
    function getMembers()
    {

        $startOfMonth = now()->startOfMonth();
        $endOfMonth = now()->endOfMonth();

        $lastMonthRows = DB::table('patron')
            ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
            ->count();

        $borrowersData = DB::table('current_loan')->selectRaw('COUNT(*) as count, DATE_FORMAT(loan_date, "%Y-%m") as month')
            ->groupBy('month')->orderBy('month')->get();
        $membersData = DB::table('patron')->selectRaw('COUNT(*) as count, DATE_FORMAT(created_at, "%Y-%m") as month')
            ->groupBy('month')->orderBy('month')->get();

        return response(["lastMonthMembers" => $lastMonthRows, "borrowers_chart" => $borrowersData, "members_chart" => $membersData], 200);
    }
}
