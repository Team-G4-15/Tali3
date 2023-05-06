<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\librarian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //this controller is resposible for the authentication    /*Check the Login Request class to check the rules defined*/
    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        // data must be an array that contains email and password
        if (!Auth::attempt($data)) {
            return response('Email or Password incorrect', 401);
        }
        // this line returns a UserModel instance

        $user = Auth::user();
        $token = $user->createToken("main")->plainTextToken;;
        return response(['user' => $user, 'token' => $token]);
    }
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = librarian::create([
            'full_name' => $data['firstName'] . " " . $data["lastName"],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'library_id' => 1
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response(['user' => $user, 'token' => $token]);
    }

    public function logout(Request $request)
    {
        // get the user making the request
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204); // saying ok but no data is sent
    }
}
