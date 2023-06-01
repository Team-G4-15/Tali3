<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class library extends Model
{

    protected $table = 'library';

    protected $primaryKey = 'library_id';

    public $timestamps=false;

    protected $fillable = [
        'name',
        'department',
        'university_id'
    ];

    public function university()
    {
        return $this->belongsTo(university::class,'university_id','university_id');
    }

    public function item()
    {
        return $this->hasMany(item::class, 'library_id', 'library_id');
    }

    use HasFactory;
}
