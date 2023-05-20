<?php

namespace App\Http\Controllers;

use App\Models\location;
use Illuminate\Http\Request;

class LocationContoller extends Controller
{
    public function getAllLocations(Request $request)
    {
        return location::all();
    }
}
