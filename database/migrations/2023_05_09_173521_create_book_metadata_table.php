<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('book_metadata', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('total_books');
            $table->unsignedBigInteger('available_books');
            $table->unsignedBigInteger('burrowed_books');
            $table->unsignedBigInteger('damaged_books');
            $table->unsignedBigInteger('lost_books');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('book_metadata');
    }
};
