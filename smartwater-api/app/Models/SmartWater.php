<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmartWater extends Model
{
    use HasFactory;
    protected $fillable = [
        'device_id',
        'reading',
        'taken_at',
    ];
}

