<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatronRequest;
use App\Models\Patron;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;



class PatronController extends Controller
{


    private static $searchFileds = [
        'patron_email',
    ];

    function AddPatron(PatronRequest $request)
    {
        $data = $request->validated();
        $patron = Patron::create($data);
        if ($patron) {
            return response("Patron added Successfully", 200);
        } else {
            return response("Error adding the patron", 400);
        }
    }

    function DeletePatron($id)
    {
        $patron = Patron::findOrFail($id);
        $patron->delete();
        return response("Patron Successfully deleted", 200);
    }

    function EditPatron(PatronRequest $request)
    {

        $data = $request->validated();
        $patrons = new Patron();
        $update = $patrons->update($data);

    }

    function getPaginatePatrons(PatronRequest $request)
    {
        $offset = $request->query("offset");
        $pageSize = $request->query("pageSize");

        $Patrons = DB::table('patrons')->paginate($pageSize ?? 100, ['*'], 'page', $offset ?? 0);
    }

    function getAllPatrons(PatronRequest $request)
    {
        return Patron::findAll();
    }

    function searchPatrons(Request $request)
    {
        $query = DB::table("patron")->select("patron_email");

        foreach ($request->query() as $field => $value) {
            if (!in_array($field, PatronController::$searchFileds) || empty($value)) {
                continue;
            } else
                $query->where($field, 'like', "%$value%");
        }

        return $query->get();

    }


}
