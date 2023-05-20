<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class renewals extends Model
{
    public $timestamps=false;

    protected $table = 'renewals';
    protected $primaryKey = ['loan_id', 'renewal_date'];

    protected $fillable = [
        'loan_id',
        'renewal_date',
        'old_due_date',
        'due_date'
    ];

    public $incrementing = false;

    public function currentLoan()
    {
        return $this->hasMany(current_loan::class, 'loan_id', 'loan_id');
    }

    use HasFactory;
}
