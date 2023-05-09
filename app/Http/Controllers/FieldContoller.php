<?php

namespace App\Http\Controllers;

use App\Models\field;
use Illuminate\Http\Request;

class FieldContoller extends Controller
{
    //

    public function getAllFields(Request $request)
    {
        return field::all();

    }
}