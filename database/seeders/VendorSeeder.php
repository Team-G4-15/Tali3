<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VendorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $vendors = [
            ['ABC Books', 'abcbooks@example.com', '123-456-7890', '123 Main St, Anytown, USA', 'bookstore'],
            ['XYZ Publishers', 'info@xyzpublishers.com', '555-555-5555', '456 Oak St, Anycity, USA', 'publisher'],
            ['Bookworms Unlimited', 'sales@bookwormsunlimited.com', '555-123-4567', '789 Maple Ave, Anywhere, USA', 'bookstore'],
        ];

        foreach ($vendors as $vendor) {
            DB::table('vendor')->insert([
                'name' => $vendor[0],
                'email' => $vendor[1],
                'phone_number' => $vendor[2],
                'address' => $vendor[3],
                'type' => $vendor[4],
            ]);
        }
    }
}
