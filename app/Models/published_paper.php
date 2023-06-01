<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published_paper extends Model
{

    protected $table = 'published_paper';

    public $timestamps = false;

    protected $fillable = [
        'author_id',
        'paper_id'
    ];

    public function author()
    {
        return $this->belongsTo(author::class, 'author_id', 'author_id');
    }

    use HasFactory;
}
