<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return (new Product)->searchable();
    }

    public function update(Request $request, $id)
    {
        $product = Product::where('id', $id)->first();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->reference = $request->reference;
        $product->stock = $request->stock;
        $product->comment = $request->comment;
        $product->is_service = $request->is_service;
        $product->category_id = $request->category_id;
        $product->company_id = $request->company_id;
        $product->save();
    }
}
