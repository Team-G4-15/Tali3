<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class copy_rp extends Model
{
    protected $table = 'copy_rp';
    protected $primaryKey = ['paper_id', 'copy_number'];

    protected $fillable=[
        'paper_id',
        'copy_number',
        'reception_date'
    ];
    public $incrementing = false;
    public $timestamps=false;

    public function current_loan()
    {
        return $this->hasOne(current_loan::class);
    }

    use HasFactory;
}
