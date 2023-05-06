<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class language extends Model
{
    protected $primaryKey = 'language_code';
    public $timestamps=false;
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'language_code',
        'language',
    ];

    public function items()
    {
        return $this->hasMany(item::class, 'language_code', 'language_code');
    }

    use HasFactory;
}
