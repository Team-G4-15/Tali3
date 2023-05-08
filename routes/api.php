<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post("/books/add", [BookController::class, 'AddBook']);
Route::delete("/book/{id}",[BookController::class, 'DeleteBook']);
Route::post("/book/{id}",[BookController::class,'LoanBook']);
});

// authentication routes
Route::post('/AddAdmin', [AuthController::class, 'signup']);
Route::post('/AdminLogin', [AuthController::class, 'login']);


//Book modification routes

