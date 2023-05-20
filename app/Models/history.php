<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class history extends Model
{
    protected $primaryKey = 'loan_id';
    public $timestamps=false;

    protected $fillable = [
        'loan_id',
        'email',
        'item_id',
        'patron_email',
        'copy_number',
        'loan_date',
        'due_date',
        'return_date',
        'renewal_count',
    ];

    public function item()
    {
        return $this->belongsTo(item::class, 'item_id', 'item_id');
    }

    public function librarian()
    {
        return $this->belongsTo(librarian::class, 'email', 'email');
    }

    public function patron()
    {
        return $this->belongsTo(patron::class, 'patron_email', 'patron_email');
    }

    public function copy()
    {
        return $this->belongsTo(copy::class, 'copy_number', 'copy_number');
    }
    use HasFactory;
}
