<?php

namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;

class KidVid extends Eloquent
{
    protected $fillable = [
        'title',
        'url',
    ];
}
