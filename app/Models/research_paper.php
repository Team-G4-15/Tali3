<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class research_paper extends Model
{

    public $timestamps=false;
    protected $table = 'research_paper';
    protected $primaryKey = 'paper_id';

    protected $fillable = [
        'title' ,
        'doi' ,
        'description' ,
        'keywords',
        'language_code',
        'location_id',
        'field_name',
        'publish_date',
        'field_name' ,
        'quantity'
    ];

    public function item()
    {
        return $this->belongsTo(item::class, 'item_id', 'paper_id');
    }

    use HasFactory;
}
