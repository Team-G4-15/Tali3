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
        Schema::create('current_loan', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('email');
            $table->integer('books_id');
            $table->string('patron_email');
            $table->integer('Copy_Number');
            $table->date('Loan_date');
            $table->date('due_date');
            $table->integer('Renewal_count')->nullable(0);
            $table->unique(['books_id', 'email', 'Copy_Number', 'Loan_date']);
            $table->foreign('email')->references('email')->on('users');
            $table->foreign('books_id')->references('book_id')->on('books');
            $table->foreign('patron_email')->references('email')->on('patrons');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('current_loan');
    }
};
