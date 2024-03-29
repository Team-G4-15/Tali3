<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class location extends Model
{

    public $timestamps=false;
    protected $table = 'location';

    protected $primaryKey = 'location_id';

    protected $fillable = [
        'aisle',
        'shelf',
        'type'
    ];

    public function items()
    {
        return $this->hasMany(item::class,'location_id','location_id');
    }

    use HasFactory;
}
