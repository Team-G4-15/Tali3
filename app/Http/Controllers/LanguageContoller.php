<?php

namespace App\Http\Controllers;

use App\Models\language;
use Illuminate\Http\Request;

class LanguageContoller extends Controller
{

    public function getAllLanguages()
    {
        return language::all();
    }
}
