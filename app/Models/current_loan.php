<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class current_loan extends Model
{
    protected $table = 'current_loan';
    protected $primaryKey = 'loan_id';
    public $timestamps = false;

    public function book()
    {
        return $this->belongsTo(book::class, 'item_id');
    }

    public function copy()
    {
        return $this->belongsTo(copy::class);
    }

    public function librarian()
    {
        return $this->belongsTo(librarian::class, 'librarian_email', 'email');
    }

    public function patron()
    {
        return $this->belongsTo(patron::class, 'patron_email', 'email');
    }

    use HasFactory;
}
