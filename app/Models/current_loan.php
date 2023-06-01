<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class current_loan extends Model
{
    protected $table = 'current_loan';
    protected $primaryKey = 'loan_id';
    public $incrementing = true;
    public $timestamps = true;

    protected $fillable = [
        'due_date',
        'renewal_count',
        'loan_date',
        'email',
        'book_id',
        'patron_email',
        'copy_number'
    ];
    public function item()
    {
        //
        return $this->hasOne(item::class, 'item_id');
    }

    public function copy()
    {
        return $this->hasOne(copy::class, 'item_id', 'item_id');
    }

    public function librarian()
    {
        return $this->belongsTo(librarian::class, 'email', 'email');
    }

    public function patron()
    {
        return $this->belongsTo(patron::class, 'patron_email', 'patron_email');
    }

    use HasFactory;
}
