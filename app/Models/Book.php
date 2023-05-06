<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class book extends Model
{
    protected $table = 'book';
    protected $primaryKey = 'book_id';
    public $timestamps = false;

    public function author()
    {
        return $this->belongsTo(author::class);
    }

    public function copies()
    {
        return $this->hasMany(copy::class);
    }
    use HasFactory;
}
