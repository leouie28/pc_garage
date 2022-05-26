<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Category::view();
    }

    /**
     * Store a newly created resource in storage.
     *
      * @param  \Illuminate\Http\Request  $request
      * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        $ValidateData = $request->validate([
            'name' => 'required|unique:categories',
        ]);
         $category = new Category([
             'name'=>$request->name
          ]);
          $category->save();
          return response()->json('Category Successfully Added!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //aaa
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

        $ValidateData = $request->validate([
            'name' => 'required|unique:categories',
        ]);

        $update = Category::find($id);
        $input = $request->all();
        $update->update($input);
        return response()->json('Company successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $category = Category::find($id);
        $category->delete();
        return response()->json('Company successfully deleted');
    }
}
