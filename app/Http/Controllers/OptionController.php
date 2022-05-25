<?php

namespace App\Http\Controllers;

use App\Models\Option;
use Illuminate\Http\Request;

class OptionController extends Controller
{
    public function index()
    {
        $option = Option::with('variations')->get();

        return response()->json($option, 200);
    }

    public function create()
    {
        return Option::view();
    }

    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|unique:options',
        // ]);

        $option = new Option([
            'name' => $request->name,
            'addprice' => $request->addprice,
            'stock' => $request->stock,
            'variation_id' => $request->variation_id,
        ]);
        $option->save();
 
        return response()->json($option, 200);
    }

    public function update(Request $request, $id)
    {
        // $request->validate([
        //     'name' => 'required|unique:options,name,'.$id,
        // ]);

        $option = Option::find($id);
        $input = $request->all();
        $option->update($input);
 
        return response()->json($option, 200);
    }

    public function destroy($id)
    {
        $option = Option::find($id);
        $option->delete();
 
        return response()->json($option, 200);
    }
}
