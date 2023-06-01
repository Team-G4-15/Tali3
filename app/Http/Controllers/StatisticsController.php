<?php

namespace App\Http\Controllers;

use Carbon\Carbon;


use Illuminate\Support\Facades\DB;


class StatisticsController extends Controller
{

    function getOverdue()
    {

        $PastOverDueBooks = DB::table('current_loan')->whereDate('due_date', '<', now())
            ->leftjoin('book', 'current_loan.book_id', '=', 'book.book_id')
            ->leftjoin('patron', 'current_loan.patron_email', '=', 'patron.patron_email')
            ->select('current_loan.due_date', 'book.title', 'patron.first_name', 'patron.last_name')->get();
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

    function getBarChart()
    {
        $currentDate = now();

        $query = DB::table('field')
            ->select(
                'field.field_name', DB::raw('SUM(CASE WHEN copy.is_loaned = 1 THEN 1 ELSE 0 END) AS count_loaned'), DB::raw('SUM(CASE WHEN copy.is_loaned is NULL OR copy.is_loaned = 0 THEN 1 ELSE 0 END) AS count_not_loaned'),
                DB::raw("SUM(CASE WHEN current_loan.due_date < '$currentDate' THEN 1 ELSE 0 END) AS count_due_date")
            )
            ->join('book', 'field.field_name', '=', 'book.field_name')
            ->leftJoin('current_loan', 'book.book_id', '=', 'current_loan.book_id')
            ->leftJoin('copy', function ($join) {
                $join->on('copy.book_id', '=', 'current_loan.book_id')
                    ->on('copy.copy_number', '=', 'current_loan.copy_number');
            })
            ->groupBy('field.field_name');

        return response()->json($query->get());
    }
}
