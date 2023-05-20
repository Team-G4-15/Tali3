<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResearchpaperRequest;
use App\Http\Requests\LoanRequest;
use App\Models\book;
use App\Models\published;
use App\Models\research_paper;
use Illuminate\Http\Request;


class ResearchpaperController extends Controller
{
    
    function AddResearchpaper(ResearchpaperRequest $request)
    {
        $data = $request->validated();
        $research_paper = research_paper::create($data);
        if ($research_paper) {
            error_log($research_paper);
            $author = ["paper_id"=>$research_paper["paper_id"],"author_id"=>(int)$request["publisher_id"]];
            if($author){
            published::create($author);
            }
            return response("Research paper Created Succesfully", 200);
        } else {
            return response("Error creating the book", 400);
        }
    }

    function DeleteResearchpaper($id)
    {
        $research_paper = research_paper::findOrFail($id);
        $research_paper->delete();
        return response("Book Successfully deleted", 200);
    }

}
