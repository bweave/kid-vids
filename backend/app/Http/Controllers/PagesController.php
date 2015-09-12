<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;

class PagesController extends BaseController
{

    public function home()
    {
        return view('pages.home');
    }
}
