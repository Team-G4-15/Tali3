<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class item extends Model
{
    protected $primaryKey = 'item_id';

    public $timestamps=false;
    protected $fillable = [
        'item_id',
        'title',
        'keywords',
        'description',
        'type',
        'quantity',
        'location_id',
        'language_code',
        'vendor_id',
        'field_name',
    ];

    public function field()
    {
        return $this->belongsTo(field::class, 'field_name', 'field_name');
    }

    public function language()
    {
        return $this->belongsTo(language::class, 'language_code', 'language_code');
    }

    public function vendor()
    {
        return $this->belongsTo(vendor::class, 'vendor_id', 'vendor_id');
    }

    public function location()
    {
        return $this->belongsTo(location::class, 'location_id', 'location_id');
    }

    public function copies()
    {
        return $this->hasMany(copy::class, 'item_id', 'item_id');
    }

    public function history()
    {
        return $this->hasMany(history::class, 'item_id', 'item_id');
    }
    public function library()
    {
        return $this->hasOne(library::class, 'library_id', 'library_id');
    }

    use HasFactory;
}
