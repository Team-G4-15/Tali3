<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published extends Model
{

    protected $table = 'published';

    public $timestamps=false;
    protected $primaryKey = ['author_id', 'item_id'];

    protected $fillable = [
        'author_id',
        'item_id'
    ];

    public function author()
    {
        return $this->belongsTo(author::class, 'author_id', 'author_id');
    }

    public function item()
    {
        return $this->belongsTo(item::class, 'item_id', 'item_id');
    }

    use HasFactory;
}