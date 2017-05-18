<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\UpdateUsername;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UpdateSettingsController extends Controller
{
    public function username(UpdateUsername $request)
    {
        $authUser = Auth::user();
        $newUsername = $request->username;

        $id = $authUser->id;
        $user = User::find($id)->first();
        $user->username = $newUsername;
        $user->save();
    }

    public function email(Request $request)
    {
        $user = $request->user();
    }

    public function password(Request $request)
    {
        $user = $request->user();
    }
}
