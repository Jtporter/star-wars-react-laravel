<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// PEOPLE
Route::get('/people', 'PeopleController@index');
Route::get('/people/{id}', 'PeopleController@show');
Route::get('/homepage', 'PeopleController@homepage');
Route::get('/people/location/{zip}', 'PeopleController@planetZipCode');


// PLANET
Route::get('/planet', 'PlanetController@index');
Route::get('/planet/{id}', 'PlanetController@show');
Route::get('/planet/location/{zip}', 'PlanetController@planetZipCode');

