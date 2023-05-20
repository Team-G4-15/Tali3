<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class university extends Model
{
    protected $table = 'university';
    protected $primaryKey = 'university_id';
    public $timestamps=false;
    public $incrementing = true;
    protected $fillable = [
        'name', 'email', 'address', 'phone_number'
    ];

    use HasFactory;
}
