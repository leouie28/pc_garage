<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $product = Product::where('company_id', $user->id)->with('images', 'categories', 'variations')->get();

        return response()->json($product, 200);
    }

    public function create()
    {
        return Product::view();
    }

    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|unique:products',
        // ]);

        $user = Auth::user();
        $product = new Product([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'reference' => $request->reference,
            'stock' => $request->stock,
            // 'category_id' => $request->category_id,
            // 'variation_id' => $request->variation_id,
            'company_id' => $user->id,
        ]);
        $product->save();
    
        $image = new Image();
        $image->filename = imageUploader($request->image_base64,'storage/');
        $image->product_id = $product->id;
        $image->save();

        return response($product, 200);

    }
    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        // $request->validate([
        //     'name' => 'required|unique:products,name,'.$id,
        // ]);

        $product = Product::find($id);
        $input = $request->all();
        $product->update($input);
        
        $image = Image::where('product_id', $product->id)->first();
        if(!isset($input['image_base64'])) {
            $filename = $image->filename ?? '';
        } else {
            removeFile($image['filename']);
            $filename = imageUploader($input['image_base64'],'storage/');
            $image->update(['filename' => $filename]);
        }
        
        return response($product, 200);
    }
    
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        $image = Image::where('product_id', $product->id)->first();
        removeFile($image['filename']);
        $image->delete();
 
        return response($product, 200);
    }

    public function updateStatus($id)
    {
        $product = Product::find($id);
        $product->update(['is_service'=>  !$product->is_service]);
        return  $product;
    }
}
