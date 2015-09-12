<?php

namespace App\Http\Controllers;

use App\KidVid;
use App\Http\Controllers\Controller as BaseController;

class KidVidsController extends BaseController
{
    /**
     * Show a list of all Kid Vids
     * @return Array
     */
    public function index()
    {
        $videos = KidVid::all();

        return response()->json($videos);
    }

    /**
     * Show a single video by $id
     * @param  Integer $id
     * @return KidVid
     */
    public function show($id)
    {
        try {
            $video = KidVid::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return response()->json($e->getMessage, 404);
        }

        return response()->json($video);
    }
}
