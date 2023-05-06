<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class research_paper extends Model
{

    protected $table = 'research_paper';
    protected $primaryKey = 'paper_id';

    public function item()
    {
        return $this->belongsTo(item::class, 'paper_id');
    }

    use HasFactory;
}
