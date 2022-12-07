<?php

namespace App\Http\Controllers\Customer;

use App\Filters\ProductFilter;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new ProductFilter)->searchable();
    }

    public function bestSell()
    {
        try{
            return Product::whereHas('sold')->withCount('sold')->withSum('order', 'order_product.quantity')->orderBy('sold_count', 'desc')->limit(5)->get();
        }catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function customSearch(Request $request)
    {
        try{
            $key = $request->key;
            $res = Product::where('name', 'LIKE', '%' . $key . '%')
            ->orWhere('description', 'LIKE', '%' . $key . '%')
            ->orWhereHas('categories', function($cat)use($key) {
                return $cat->where('name', 'LIKE', '%' . $key . '%');
            })
            ->orderBy('id', 'desc')->limit(10)->get(['id', 'name']);

            if(count($res)>0){
                return $res;
            }else{
                $empty[] = [
                    'id' => 0,
                    'name' => 'Search not found...'
                ];

                return $empty;
            }
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
        //
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
            $product = Product::with('categories')
            ->with('feedback')
            ->withSum('sold', 'order_product.quantity')
            ->withSum('toDeliver', 'order_product.quantity')
            ->withSum('pending', 'order_product.quantity')
            ->withSum('canceled', 'order_product.quantity')
            ->withSum('stocks', 'stocks.stocks')
            ->find($id);
            $cat = array();
            foreach($product->categories as $id){
                $cat[] = $id->id;
            }
            $similar = Product::whereHas('categories', function($same) use ($cat){
                return $same->whereIn('category_id', $cat);
            })->where('id', '!=', $product->id)->withCount('rating')->limit(8)->get();
            return [
                "product" => $product,
                "similar" => $similar
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
