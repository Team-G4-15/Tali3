<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\FieldContoller;
use App\Http\Controllers\LocationContoller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthorContoller;
use App\Http\Controllers\LanguageContoller;


use App\Http\Controllers\VendorContoller;



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post("/books/add", [BookController::class, 'AddBook']);
    Route::delete("/book/{id}", [BookController::class, 'DeleteBook']);
    Route::post("/book/{id}", [BookController::class, 'LoanBook']);
    Route::post("/book/{id}",[BookController::class, 'UpdateBook']);

});
Route::post("/researchpapers/add", [BookController::class, 'AddResearchpaper']);
Route::delete("/researchpapers/{id}", [BookController::class, 'DeleteResearchpaper']);

// authentication routes
Route::post('/AddAdmin', [AuthController::class, 'signup']);
Route::post('/AdminLogin', [AuthController::class, 'login']);


// form routes
Route::get("/vendors", [VendorContoller::class, 'getAllVendors']);
Route::get("/fields", [FieldContoller::class, 'getAllFields']);
Route::get("/locations", [LocationContoller::class, 'getAllLocations']);
Route::get("/authors", [AuthorContoller::class, 'getAllAuthors']);
Route::get("/languages", [LanguageContoller::class, 'getAllLanguages']);

Route::get("/books",[BookController::class, 'getPaginateBooks']);
Route::get("/books/search",[BookController::class, 'SearchBook']);


// Patron routes
Route::post("/patrons/{id}", [PatronController::class, 'AddPatron']);
Route::delete("/patrons/{id}", [PatronController::class, 'DeletePatron']);
Route::get("/patrons", [PatronController::class, 'getAllPatrons']);

//Book modification routes
