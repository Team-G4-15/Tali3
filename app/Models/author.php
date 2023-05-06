<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class author extends Model
{
    protected $table = 'author';
    protected $primaryKey = 'author_id';
    public $timestamps = false;

    public function books()
    {
        return $this->hasMany(book::class);
    }

    use HasFactory;
}
