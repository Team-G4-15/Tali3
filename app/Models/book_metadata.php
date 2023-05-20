<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class book_metadata extends Model
{
    protected $table = 'book_metadata';
    protected $primaryKey = 'id';
    public $incrementing = true;

    public $timestamps=true;

    protected $fillable = [
        'id',
        'total_books',
        'available_books',
        'burrowed_books',
        'damaged_books',
        'lost_books'
    ];


    use HasFactory;
}
