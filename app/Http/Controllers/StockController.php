<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Exception;
use Illuminate\Http\Request;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getProductSku(Request $request)
    {
        try{
            if($request->product != null){
                $stock = Stock::where('product_id', $request->product)->get();
        
                return $stock;
            }else{
                return [
                    "data" => $request,
                    "type" => "error",
                    "message" => "Empty parameter..."
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

    public function updateSkuStocks(Request $request, $skuId)
    {
        try{
            $stock = Stock::find($skuId);
            $old = $stock->stocks;

            $new = $old + $request->stocks;
            $stock->stocks = $new;
            $stock->save();

            return [
                "data" => $stock,
                "type" => "success",
                "message" => "Stocks successfully updated!"
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
            $stock = Stock::where([
                ['sku', '=', $request->sku],
                ['product_id', '=', $request->product_id],
            ])->first();
            if($stock){
                return [
                    "data" => $stock,
                    "type" => "error",
                    "message" => "This sku already exist in the selected product..."
                ];
            }else{
                if(isset($request->stock)){
                    $stock = new Stock([
                        'sku' => $request->sku,
                        'product_id' => $request->product_id,
                        'stocks' => $request->stock,
                    ]);
                    $stock->save();
                }else{
                    $stock = new Stock([
                        'sku' => $request->sku,
                        'product_id' => $request->product_id,
                    ]);
                    $stock->save();
                }
                
                return [
                    "data" => $stock,
                    "type" => "success",
                    "message" => "Stock keeping unit successfully added!"
                ];
            }
        }catch(Exception $e){
            return [
                "data" => $stock,
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
        try{
            $stock = Stock::find($id)->delete();
            return [
                "data" => $stock,
                "type" => "warning",
                "message" => 'Stock successfully deleted...',
            ];
        }catch(Exception $e){
            return [
                "data" => $stock,
                "type" => "error",
                "message" => $e->getMessage(),
            ];
        }
    }
}
