<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patron extends Model
{

    protected $table = 'patron';

    protected $primaryKey = 'patron_email';

    protected $fillable = [
        'first_name',
        'last_name',
        'type',
        'university_id'
    ];

    public function university()
    {
        return $this->belongsTo(university::class);
    }

    public function loans()
    {
        return $this->hasMany(loan::class, 'patron_email');
    }

    use HasFactory;
}
