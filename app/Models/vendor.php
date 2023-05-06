<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vendor extends Model
{
    protected $table = 'vendor';
    protected $primaryKey = 'vendor_id';
    public $timestamps=false;
    public $incrementing = true;
    protected $fillable = [
        'name', 'email', 'phone_number', 'address', 'type'
    ];

    use HasFactory;
}
