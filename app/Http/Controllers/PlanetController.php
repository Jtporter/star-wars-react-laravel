<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Planet;
use App\Http\Resources\Planet as PlanetResource;
use App\Http\Resources\PlanetCollection;


class PlanetController extends Controller
{
    public function index()
    {
        return new PlanetCollection(Planet::all());
    }

    public function show($id)
    {
        return new PlanetResource(Planet::findOrFail($id));
    }
}
