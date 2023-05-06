<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class renewals extends Model
{

    protected $table = 'renewals';
    protected $primaryKey = ['loan_id', 'renewal_date'];
    public $incrementing = false;

    public function currentLoan()
    {
        return $this->belongsTo(currentLoan::class, 'loan_id');
    }

    use HasFactory;
}
