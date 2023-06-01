<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class old_renewals extends Model
{
    public $timestamps=false;
    protected $table = 'old_renewals';

    protected $primaryKey = ['history_loan_id', 'renewal_date'];

    protected $fillable = [
        'history_loan_id',
        'renewal_date',
        'old_due_date',
        'due_date'
    ];

    public function history()
    {
        return $this->belongsTo(history::class, 'history_loan_id', 'history_loan_id');
    }

    use HasFactory;
}
