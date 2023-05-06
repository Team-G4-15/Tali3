<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class librarian extends Model
{

    protected $primaryKey = 'librarian_email';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'librarian_email',
        'full_name',
        'password',
        'library_id',
    ];

    protected $hidden = [
        'password',
    ];

    public function library()
    {
        return $this->belongsTo(library::class, 'library_id', 'library_id');
    }

    public function histories()
    {
        return $this->hasMany(history::class, 'librarian_email', 'librarian_email');
    }

    use HasFactory, Notifiable, HasApiTokens;
}
