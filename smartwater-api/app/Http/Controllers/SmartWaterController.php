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
public function store(Request $request)
    {
        $smartwater = new SmartWater($request->all());
        $smartwater->save();

        return response()->json([
            'data' => $smartwater,
            'message' => 'Water meter created successfully',
        ],
            201);

    }
}
