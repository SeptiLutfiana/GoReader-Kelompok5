<?php

namespace App\Http\Controllers;

use App\Models\WaterMeter;
use Illuminate\Http\Request;

class WaterMeterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $waterMeters = WaterMeter::all();

        return response()->json([
            'data' => $waterMeters,
            'message' => 'Water meters retrieved successfully',
        ],
            200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $waterMeter = new WaterMeter($request->all());
        $waterMeter->save();

        return response()->json([
            'data' => $waterMeter,
            'message' => 'Water meter created successfully',
        ],
            201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}