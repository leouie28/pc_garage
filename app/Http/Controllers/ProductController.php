<?php

namespace App\Http\Controllers;

use App\Filters\ProductFilter;
use App\Models\Image;
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
        // return Product::withCount('orders')->get();
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

            $product = new Product([
                'serial_number' => '#' . genareteNumbers(7),
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'cost_price' => $request->cost_price,
            ]);
            $product->save();
    
            $product->categories()->attach($request->categories);
            if($request->image){
                $file = uploadImage(
                    $request->image,
                    'images/products/' . $product->id . '/'
                );
                // $product->images()->attach($file);
                $image = Image::create([
                    'imagable_id' => $product->id,
                    'imagable_type' => 'App\Models\Product',
                    'file_name' => $file
                ]);
            }
    
            return [
                "data" => $product,
                "type" => "success",
                "message" => "Product successfully added!",
            ];
        }catch(Exception $e){
            return [
                "data" => $product,
                "type" => "error",
                "message" => $e->getMessage(),
                // "message" => "Failed to add product! Please try again..",
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
        // return Product::with('categories')->find($id);
        try{
            $product = Product::where('id', $id)
            ->with('categories')
            ->with('feedback')
            ->withCount('rating')
            // ->withCount('feedbackCount')
            ->withSum('sold', 'order_product.quantity')
            ->withSum('toDeliver', 'order_product.quantity')
            ->withSum('pending', 'order_product.quantity')
            ->withSum('canceled', 'order_product.quantity')
            ->withSum('stocks', 'stocks.stocks')
            ->first();
            
            return $product;
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

    public function updateReoder(Request $request)
    {
        $prod = Product::find($request->id);
        $prod->reoder_point = $request->val;
        $prod->save();

        return $prod;
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
            $product = Product::find($id);
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            $product->cost_price = $request->cost_price;
            
            $product->save();
    
            // $product->categories()->delete();
    
            $product->categories()->sync($request->categories);
    
            if(!empty($request->image)){
                $file = uploadImage(
                    $request->image,
                    'images/products/' . $product->id . '/'
                );
                $image = Image::where('imagable_id', $product->id)->first();
                if($image){
                    $image->file_name = $file;
                    $image->save();
                }else{
                    $image = Image::create([
                        'imagable_id' => $product->id,
                        'imagable_type' => 'App\Models\Product',
                        'file_name' => $file,
                    ]);
                }
                    
            }

            return [
                "data" => $product,
                "type" => "success",
                "message" => "Product successfully updated!",
            ];
        }catch(Exception $e){
            return [
                "data" => $request,
                "type" => "error",
                "message" => $e->getMessage(),
                // "message" => "Failed to update product! Please try again..",
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
        $product = Product::withCount('order')->where('id', $id)->first();

        if($product->order_count>0){
            return [
                "data" => $product,
                "type" => "error",
                "message" => "Failed to delete product! This product has order record.",
              ];
        }
        $product->delete();
        return [
        "data" => $product,
        "type" => "warning",
        "message" => "Delete successfully",
        ];
    }
}
