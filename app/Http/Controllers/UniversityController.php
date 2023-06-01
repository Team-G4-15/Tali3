<?php

namespace App\Http\Controllers;

use App\Models\university;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    public function getAllUniversities(Request $request){
        return university::all();
    }
}
