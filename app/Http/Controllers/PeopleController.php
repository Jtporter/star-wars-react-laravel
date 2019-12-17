<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\People;
use App\Http\Resources\People as PeopleResource;
use App\Http\Resources\PeopleCollection;


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
}
