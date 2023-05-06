<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class book extends Model
{
    protected $table = 'book';
    protected $primaryKey = 'book_id';
    public $incrementing = false;

    public $timestamps=false;

    protected $fillable = [
        'book_id',
        'isbn',
        'edition',
        'publish_date'
    ];

    public function item()
    {
        return $this->belongsTo(item::class, 'item_id', 'book_id');
    }

    use HasFactory;
}
