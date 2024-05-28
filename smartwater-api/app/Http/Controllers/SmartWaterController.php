<?php

namespace App\Http\Controllers;
use App\Models\SmartWater;
use Illuminate\Http\Request;

class SmartWaterController extends Controller
{
    public function index()
    {
    $smartwater = SmartWater::all();
    return response()->json([
        'data' => $smartwater,
        'message' => 'Water meters retrieved successfully',
    ],
        200);
}
}
