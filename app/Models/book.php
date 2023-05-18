<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Book extends Model
{
    protected $table = 'book';
    protected $primaryKey = 'book_id';
    public $incrementing = true;

    public $timestamps=true;

    protected $fillable = [
        'title' ,
        'isbn' ,
        'description' ,
        'keywords',
        'language_code',
        'location_id',
        'field_name',
        'vendor_id' ,
        'publish_date',
        'edition' ,
        'field_name' ,
        'type',
        'quantity'
    ];

    public function authors(): BelongsToMany
    {
        return $this->belongsToMany(author::class, 'published', 'book_id', 'author_id');
    }

    use HasFactory;
}
