<?php

namespace App\Http\Controllers;

use App\Models\author;

use Illuminate\Http\Request;

class AuthorContoller extends Controller
{
    public function getAllAuthors(Request $request){
        return author::all();
    }
}
