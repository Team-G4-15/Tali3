<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class author extends Model
{
    protected $table = 'author';
    public $timestamps=false;
    protected $primaryKey = 'author_id';
    protected $fillable = [
        'author_name'
    ];
    use HasFactory;
}
