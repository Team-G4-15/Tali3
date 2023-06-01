<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class librarian extends Authenticatable
{


    protected $table="librarian";
    protected $primaryKey = 'id';
    public $incrementing = true;


    protected $fillable = [
        'email',
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

    public function history()
    {
        return $this->hasMany(history::class, 'email', 'email');
    }

    public function current_loan()
    {
        return $this->hasMany(current_loan::class, 'email','email');
    }

    public function lost_items()
    {
        return $this->hasMany(lost_items::class, 'email','email');
    }

    use HasFactory, Notifiable, HasApiTokens;
}
