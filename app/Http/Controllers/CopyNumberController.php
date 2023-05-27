<?php

namespace App\Http\Controllers;

use App\Models\copy;
use Illuminate\Http\Request;

class CopyNumberController extends Controller
{
    public function getCopyNumbers(Request $request)
    {
        $book_id = $request->query("book_id");
        return response()->json(copy::where("book_id", $book_id)->where("is_loaned", 0)->select("copy_number")->get());

    }
}
