<?php

namespace App\Http\Controllers;

use App\Models\language;

class LanguageContoller extends Controller
{

    public function getAllLanguages()
    {
        return language::all();
    }
}
