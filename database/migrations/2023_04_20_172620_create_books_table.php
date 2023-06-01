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
            $table->unsignedBigInteger('ISBN');
            $table->string('desc')->nullable();
            $table->string("keywords")->nullable();
            $table->integer('Quantity')->default(0);
            $table->timestamps();
            $table->bigInteger('lang_id')->nullable();
            $table->bigInteger('location_id')->nullable();
            $table->bigInteger('field_id')->nullable();
            $table->bigInteger('vendor_id')->nullable();
            $table->date("publish_date")->nullable();
            $table->string('edition')->nullable();
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
