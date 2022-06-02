<?php

namespace App\Http\Controllers;

use App\Models\Variation;
use Illuminate\Http\Request;

class VariationController extends Controller
{
    public function index()
    {
        return Variation::get();
    }

    public function create()
    {
        return Variation::view();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:variations',
        ]);

        $variation = new Variation([
            'name' => $request->name,
        ]);
        $variation->save();
 
        return response()->json($variation, 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|unique:variations,name,'.$id,
        ]);

        $variation = Variation::find($id);
        $input = $request->all();
        $variation->update($input);
 
        return response()->json($variation, 200);
    }

    public function destroy($id)
    {
        $variation = Variation::find($id);
        $variation->delete();
 
        return response()->json($variation, 200);
    }
}
