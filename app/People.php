<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    public function getPeople($session)
    {
        if (!$session->has('people')) {
            return $session->get('people');
        }
    }

    public function getPerson($session, $id)
    {
        if (!$session->has('people')) {
            return $session->get('people')[$id];
        }
    }

    public function getHomePagePeople($session)
    {
        if (!$session->has('people')) {
            return $session->get('people');
        }
    }
}
