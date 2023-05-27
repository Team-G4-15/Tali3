<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patron extends Model
{

    public $timestamps=false;
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
        return $this->belongsTo(university::class, 'university_id', 'university_id');
    }

    public function loans()
    {
        return $this->hasMany(current_loan::class, 'patron_email', 'patron_email');
    }

    use HasFactory;
}
