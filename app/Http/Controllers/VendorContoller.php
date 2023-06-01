<?php

namespace App\Http\Controllers;

use App\Http\Requests\VendorRequest;
use App\Models\vendor;
use Illuminate\Http\Request;

class VendorContoller extends Controller
{
    public function getAllVendors(Request $request)
    {
        return vendor::all();
    }

    public function addVendor(VendorRequest $vendorRequest)
    {
        $data = $vendorRequest->validated();

        $data["name"] = $data["vendor_name"];
        $vendor = vendor::create($data);
        return response()->json($vendor);
    }
}
