<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published extends Model
{

    protected $table = 'published';

    public function author()
    {
        return $this->belongsTo(author::class, 'author_id');
    }

    public function item()
    {
        return $this->belongsTo(item::class, 'item_id');
    }

    use HasFactory;
}
