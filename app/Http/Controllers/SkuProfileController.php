<?php

namespace App\Http\Controllers;

use App\Filters\SkuProfileFilter;
use App\Models\SkuProfile;
use App\Models\Stock;
use Exception;
use Illuminate\Http\Request;

class SkuProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new SkuProfileFilter)->searchable();
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
            $sku = SkuProfile::where('sku_code', $request->code)->first();
            
            if($sku){
                return [
                    "data" => $request,
                    "type" => "error",
                    "message" => 'Sku code already registered...',
                ];
            }else{
                $sku = new SkuProfile([
                    'sku_code' => $request->code,
                    'name' => $request->name
                ]);
                $sku->save();
                return [
                    "data" => $sku,
                    "type" => "success",
                    "message" => 'Sku profile successfully added...',
                ];
            }
        }catch(Exception $e){
            return [
                "data" => $request,
                "type" => "error",
                "message" => $e->getMessage(),
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
        try{
            // return SkuProfile::find($id);
            $sku = SkuProfile::where('id', '=', $id)->with('products', function($item) {
                return $item->with('product');
            })->first();

            return $sku;
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
        try{
            $sku = SkuProfile::find($id);
    
            $sku->sku_code = $request->code;
            $sku->name = $request->name;
            $sku->save();

            return [
                "data" => $sku,
                "type" => "success",
                "message" => 'Sku profile successfully updated...',
            ];
        }catch(Exception $e){
            return [
                "data" => $request,
                "type" => "error",
                "message" => $e->getMessage(),
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
            $sku = SkuProfile::find($id);
            $stocks = Stock::where('sku', $sku->sku_code)->get();
            foreach($stocks as $stock){
                $stock->delete();
            }
            $sku->delete();
            return [
                "data" => $sku,
                "type" => "warning",
                "message" => 'Sku profile successfully deleted...',
            ];
        }catch(Exception $e){
            return [
                "data" => $sku,
                "type" => "error",
                "message" => $e->getMessage(),
            ];
        }
    }
}
