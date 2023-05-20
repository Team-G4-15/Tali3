<?php

namespace App\Http\Controllers;

use App\Models\vendor;
use Illuminate\Http\Request;

class VendorContoller extends Controller
{
    public function getAllVendors(Request $request){
        return vendor::all();
    }
}
