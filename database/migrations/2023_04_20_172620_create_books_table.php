<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('ISBN');
            $table->string('desc');
            $table->string("keywords");
            $table->integer('Quantity');
            $table->timestamps();
            $table->bigInteger('lang_id');
            $table->bigInteger('location_id');
            $table->bigInteger('field_id');
            $table->bigInteger('vendor_id');
            $table->date("publish_date");
            $table->string('edition');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
