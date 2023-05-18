<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class author extends Model
{
    protected $table = 'author';
    public $timestamps=false;
    protected $primaryKey = 'author_id';
    protected $fillable = [
        'author_name'
    ];

    public function books(): BelongsToMany
    {
        return $this->belongsToMany(Book::class, 'published', 'author_id', 'book_id');
    }
    use HasFactory;
}
