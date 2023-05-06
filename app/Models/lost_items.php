<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lost_items extends Model
{

    public $timestamps=false;
    protected $table = 'lost_items';

    protected $primaryKey = ['copy_number', 'email','item_id'];

    protected $fillable = [
        'copy_number',
        'reception_date',
        'lost_date',
        'reason',
        'email',
        'item_id'
    ];

    public function librarian()
    {
        return $this->belongsTo(librarian::class, 'email','email');
    }

    use HasFactory;
}
