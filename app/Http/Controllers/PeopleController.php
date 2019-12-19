<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\People;
use App\Planet;
use App\Http\Resources\People as PeopleResource;
use App\Http\Resources\PeopleCollection;
use App\Http\Resources\PlanetCollection;


class PeopleController extends Controller
{
    public function index()
    {
        return new PeopleCollection(People::all());
    }

    public function show($id)
    {
        return new PeopleResource(People::findOrFail($id));
    }

    public function homepage()
    {
        return new PeopleCollection((People::findMany([1, 4, 10])));
    }

    public function planetZipCode($zip)
    {
        $getId = function ($n) {
            return $n->id;
        };

        $arr = str_split($zip);
        $planets = (Planet::where('planet_zip', 'LIKE', $arr[0] . '%')->get());
        $idArray = array_map($getId, json_decode($planets, FALSE));
        return new PeopleCollection((People::findMany($idArray)));
    }
}
