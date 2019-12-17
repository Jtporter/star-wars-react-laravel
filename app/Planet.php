<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Planet extends Model
{
    public function getPlanets($session)
    {
        if (!$session->has('planet')) {
            return $session->get('planet');
        }
    }

    public function getPlanet($session, $id)
    {
        if (!$session->has('planet')) {
            return $session->get('planet')[$id];
        }
    }
}
