<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KidVidsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('kid_vids')->truncate();

        factory(App\KidVid::class, 50)->create();
    }
}
