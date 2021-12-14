<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\DefaultRoleSeeder;
use Database\Seeders\DefaultPermissionSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(DefaultRoleSeeder::class);
        $this->call(DefaultPermissionSeeder::class);
        $this->call(UserSeeder::class);
    }
}
