<?php

namespace App\Http\Controllers;

use App\Filters\SetFilter;
use App\Models\DummyProduct;
use App\Models\Product;
use App\Models\Set;
use Exception;
use Illuminate\Http\Request;

class SetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new SetFilter)->searchable();
    }

    public function searchItem(Request $request)
    {
        try{
            $prod = Product::where('name', 'LIKE', '%'.$request->key.'%')
            ->limit(8)->get(['id', 'name', 'description']);
            if(!$prod){
                $prod = DummyProduct::where('name', 'LIKE', '%'.$request->key.'%')
                ->limit(8)->get(['id', 'name', 'description']);
            }
            return $prod;
        }catch(Exception $e){
            return $e->getMessage();
        }
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
            $set = Set::create($request->toArray());
            return [
                'data' => $set,
                'type' => 'success',
                'message' => 'Compatibility Set successfully added...'
            ];
        }catch(Exception $e){
            return $e->getMessage();
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
        try{
            $set = Set::find($id);
            $items= array();

            return [
                'data' => $set,
                'items' => $items
            ];
        }catch(Exception $e){
            return $e->getMessage();
        }
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
    }
}
