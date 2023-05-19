<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published extends Model
{

    protected $table = 'published';

    public $timestamps=false;

    protected $fillable = [
        'author_id',
        'book_id'
    ];

    public function author()
    {
        return $this->belongsTo(author::class, 'author_id', 'author_id');
    }

    public function book()
    {
        return $this->belongsTo(Book::class, 'book_id', 'book_id');
    }

    use HasFactory;
}
