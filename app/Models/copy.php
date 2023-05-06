<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class copy extends Model
{
    protected $table = 'copy';
    public $timestamps = false;
    protected $primaryKey = ['item_id', 'copy_number'];
    public $incrementing = false;

    public function book()
    {
        return $this->belongsTo(book::class, 'item_id');
    }

    public function current_loan()
    {
        return $this->hasOne(current_loan::class);
    }

    use HasFactory;
}
