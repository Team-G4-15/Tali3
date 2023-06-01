<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResearchpaperRequest;
use App\Models\published_paper;
use App\Models\research_paper;
use App\Models\copy_rp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ResearchpaperController extends Controller
{

    function AddResearchpaper(ResearchpaperRequest $request)
    {
        $data = $request->validated();
        $research_paper = research_paper::create($data);
        if ($research_paper) {
            error_log($research_paper);
            $author = ["paper_id" => $research_paper["paper_id"], "author_id" => (int) $request["publisher_id"]];
            if ($author) {
                published_paper::create($author);
            }
            for ($i = 1; $i <= $research_paper["quantity"]; $i++) {
                $copy_data = ["paper_id" => $research_paper["paper_id"], "copy_number" => $i, "reception_date" => now()];
                if ($copy_data) {
                    copy_rp::create($copy_data);
                }
            }
            return response("Research paper Created Succesfully", 200);
        } else {
            return response("Error creating the Research paper", 400);
        }
    }

    function getPaginateResearchpaper(Request $request)
    {
        $offset = $request->query("offset");
        $pageSize = $request->query("pageSize");
        $Researchpapers = DB::table('published_paper')
            ->leftjoin('research_paper', 'published_paper.paper_id', '=', 'research_paper.paper_id')
            ->leftjoin('author', 'published_paper.author_id', '=', 'author.author_id')
            ->leftjoin("location", "research_paper.location_id", "=", "location.location_id")
            ->select('research_paper.*', 'research_paper.paper_id as id', 'location.aisle', 'location.shelf', DB::raw('GROUP_CONCAT(author.author_name SEPARATOR ", ") as author'))
            ->selectRaw("CONCAT(location.shelf, '-', location.aisle) as location")
            ->selectRaw('IF(quantity > 0, "Available", "Not Available") as availability')
            ->groupBy(
                'research_paper.paper_id',
                'research_paper.title',
                'location.aisle',
                'location.shelf',
                'research_paper.quantity',
                'author.author_name',
                'research_paper.keywords',
                'research_paper.description',
                'research_paper.doi',
                'research_paper.location_id',
                'research_paper.language_code',
                'research_paper.field_name',
                'research_paper.publish_date',
                'research_paper.created_at',
                'research_paper.updated_at'
            )->paginate($pageSize ?? 100, ['*'], 'page', $offset ?? 0);
        return $Researchpapers;
    }
    function DeleteResearchpaper($id)
{
    $research_paper = research_paper::findOrFail($id);
    $research_paper->delete();
    return response("Research paper Successfully deleted", 200);

}
}


