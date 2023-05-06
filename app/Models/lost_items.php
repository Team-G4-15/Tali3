<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lost_items extends Model
{

    protected $table = 'lost_items';

    protected $fillable = [
        'copy_number',
        'reception_date',
        'lost_date',
        'reason',
        'librarian_email',
        'item_id'
    ];

    public function librarian()
    {
        return $this->belongsTo(librarian::class);
    }

    public function item()
    {
        return $this->belongsTo(item::class);
    }

    use HasFactory;
}
