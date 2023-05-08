<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BOOK extends Model
{
    protected $table = 'book';
    protected $primaryKey = 'book_id';
    public $incrementing = true;

    public $timestamps=true;

    protected $fillable = [
        'title' ,
        'isbn' ,
        'description' ,
        'keywords',
        'language_code',
        'location_id',
        'field_id',
        'vendor_id' ,
        'publish_date',
        'edition' ,
        'field_name' ,
        'type',
        'quantity',
        
    ];


    use HasFactory;
}
