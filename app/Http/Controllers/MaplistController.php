<?php

namespace App\Http\Controllers;

use App\Http\Requests\MaplistRequest;
use Illuminate\Http\Request;
use App\Models\Maplist;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class MaplistController extends Controller
{
    public function index()
    {
        $lists = Maplist::where('user_id', Auth::id())->get()->sortByDesc("id");
        return view('maplist.index', ['lists' => $lists]);
    }

    public function create(MaplistRequest $request)
    {
        $list = Maplist::create([
            'title' => $request->title,
            'user_id' => Auth::id()
        ]);


        return redirect()->route('maplist.index');
    }
}
