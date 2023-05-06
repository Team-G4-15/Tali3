<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class library extends Model
{

    protected $table = 'library';

    protected $primaryKey = 'library_id';

    protected $fillable = [
        'name',
        'department',
        'university_id'
    ];

    public function university()
    {
        return $this->belongsTo(university::class);
    }

    public function items()
    {
        return $this->hasMany(item::class);
    }

    use HasFactory;
}
