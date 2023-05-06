<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class location extends Model
{

    protected $table = 'location';

    protected $primaryKey = 'location_id';

    protected $fillable = [
        'aisle',
        'shelf',
        'type'
    ];

    public function items()
    {
        return $this->hasMany(item::class);
    }

    use HasFactory;
}
