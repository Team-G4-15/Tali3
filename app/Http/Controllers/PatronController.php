<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatronRequest;
use App\Models\patron;
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
        $patron = patron::create($data);
        if ($patron) {
            return response()->json($patron);
        } else {
            return response("Error adding the patron", 400);
        }
    }

    function DeletePatron($id)
    {
        $patron = patron::findOrFail($id);
        $patron->delete();
        return response("Patron Successfully deleted", 200);
    }

    function EditPatron(PatronRequest $request)
    {

        $data = $request->validated();
        $patrons = new patron();
        $update = $patrons->update($data);

    }

    function getPaginatePatrons(Request $request)
    {
        $offset = $request->query("offset");
        $pageSize = $request->query("pageSize");
        $Patrons = DB::table('patron')->leftJoin('university', 'patron.university_id', '=', 'university.university_id')
            ->select('patron.*', 'university.name', 'patron.patron_email as id')->groupBy(
                'patron.patron_email',
                'university.name',
                'patron.first_name',
                'patron.last_name',
                'patron.type',

            )
            ->paginate($pageSize ?? 100, ['*'], 'page', $offset ?? 0);
        return $Patrons;
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
