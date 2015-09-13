<?php

namespace App\Http\Controllers;

use App\KidVid;
use Illuminate\Support\Facades\File;
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

    /**
     * Get the requested Video File
     * @param  string $fileName
     * @return Response
     */
    public function video($fileName)
    {
        $filePath = storage_path().'/app/videos/'.$fileName;

        if (! File::exists($filePath) or (! $mimeType = File::mimeType($filePath))) {
            return response("File does not exist.", 404);
        }

        $fileContents = File::get($filePath);

        return response($fileContents, 200, ['Content-Type' => $mimeType]);
    }
}
