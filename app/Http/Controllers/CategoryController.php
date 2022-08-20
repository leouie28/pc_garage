<?php

namespace App\Http\Controllers;

use App\Filters\CategoryFilter;
use App\Models\Category;
use Exception;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new CategoryFilter)->searchable();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            if(Category::where('name', $request->name)->exists()){
                return [
                    'data' => $request,
                    'type' => 'error',
                    'message' => 'Category name already registered..',
                ];
            }else{
                $cat = Category::create($request->toArray());

                return [
                    'data' => $cat,
                    'type' => 'success',
                    'message' => 'Category successfully added...',
                ];
            }
        }catch(Exception $e){
            return [
                'data' => $request,
                'type' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        try{
            $cat = Category::find($id);
            $cat->update($request->toArray());

            return [
                'data' => $cat,
                'type' => 'success',
                'message' => 'Category successfully updated...'
            ];
        }catch(Exception $e){
            return [
                'data' => $cat,
                'type' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $cat = Category::withCount('products')->where('id', $id)->first();
            if($cat->products_count>0){
                return [
                    'data' => $cat,
                    'type' => 'error',
                    'message' => 'The category your trying to delete already has a product record...'
                ];
            }else{
                $cat->delete();
                return [
                    'data' => $cat,
                    'type' => 'success',
                    'message' => 'Category successfully deleted...'
                ];
            }
        }catch(Exception $e){
            return [
                'data' => $cat,
                'type' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }
}
