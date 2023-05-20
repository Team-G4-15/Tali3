<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class field extends Model
{

    protected $table = "field";
    protected $primaryKey = 'field_name';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;


    protected $fillable = [
        'field_name',
        'field_keywords',
    ];

    public function items()
    {
        return $this->hasMany(item::class, 'field_name', 'field_name');
    }

    use HasFactory;
}
