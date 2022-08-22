<?php

namespace App\Http\Controllers;

use App\Filters\SetFilter;
use App\Models\Category;
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
            if($request->key){
                $prod = Product::where('name', 'LIKE', '%'.$request->key.'%')
                ->limit(8)->get(['id', 'name', 'description']);
                if(!$prod){
                    $prod = DummyProduct::where('name', 'LIKE', '%'.$request->key.'%')
                    ->limit(8)->get(['id', 'name', 'description']);
                }
                return $prod;
            }elseif($request->type){
                $key = $request->type;
                $prod = Product::whereHas('categories', function($item) use ($key) {
                    return $item->where('name', 'LIKE', '%'.$key.'%');
                })->get();
                return $prod;
            }elseif($request->dp){
                $dp = DummyProduct::where('name', 'LIKE', '%'.$request->key.'%')
                ->limit(8)->get(['id', 'name', 'description']);

                return $dp;
            }
        }catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function mainItem(Request $request)
    {
        try{
            return Product::with('categories')->find($request->id);
        }catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function availableItem(Request $request)
    {
        try{
            $key = $request->key;
            $arr1 = Product::whereHas('sets', function($item) use ($key) {
                $item->where('settables.settable_part', $key);
            })->get();
            $arr2 = DummyProduct::whereHas('sets', function($item) use ($key) {
                $item->where('settables.settable_part', $key);
            })->get();
            $item = $arr1->merge($arr2);
            return $item;
        }catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function checkItems(Request $request)
    {
        try{
            $sets = array();
            foreach($request->data as $part){
                if(isset($part['item'])){
                    $key = $part['component'];
                    $key_id = $part['item']['id'];
                    $arr1 = Set::whereHas('products', function($item) use ($key_id) {
                        $item->where('settables.settable_id', $key_id);
                    })->pluck('id');
                    $arr2 = Set::whereHas('dummyProducts', function($item) use ($key_id) {
                        $item->where('settables.settable_id', $key_id);
                    })->pluck('id');
                    // $set = $arr1->merge($arr2);
                    $sets[$key] = $arr1->merge($arr2);
                    // $sets[$key] = array_unique($set);
                    // $sets[$key] = array_merge($arr1, $arr2);
                }
            }
            $arr = json_decode(json_encode($sets), true);
            $res = call_user_func_array('array_intersect', $arr);
            if(count($res)>0){
                return true;
            }else{
                return false;
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

    public function addItem(Request $request)
    {
        try{
            if($request->onSystem==1){
                $item = Product::find($request->id);
                $item->sets()->attach($item, ['settable_part' => $request->type, 'set_id' => $request->set_id]);

                return [
                    'data' => $item,
                    'type' => 'success',
                    'message' => 'Item successfully added...'
                ];
            }elseif($request->onSystem==0){
                // $type = $request->type;
                // $set_id = $request->set_id;
                // $set = DummyProduct::where('name', '=', $request->name)
                // ->first();
                // $set->sets()
                // ->wherePivot('settables.settable_type', '=', $request->type)
                // ->wherePivot('settables.id', '=', $request->set_id)->exists();
                // if($set){
                //     return [
                //         'data' => $set,
                //         'type' => 'error',
                //         'message' => 'Item already registered in the selected component...'
                //     ];
                // }else{
                //     return 'hello';
                // }
                $dp = DummyProduct::create([
                    'name' => $request->name,
                    'description' => $request->description,
                ]);

                $dp->sets()->attach($dp, ['settable_part' => $request->type, 'set_id' => $request->set_id]);

                return [
                    'data' => $dp,
                    'type' => 'success',
                    'message' => 'Item successfully added...'
                ];
            }
        }catch(Exception $e){
            return [
                'data' => $request,
                'type' => 'error',
                'message' => $e->getMessage()
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
            $set = Set::find($id);
            $items = array();
            $isEmpty = 0;
            $category = Category::all();
            
            foreach($category as $cat) {
                $key = $cat->name;
                $arr1 = Product::whereHas('sets', function($item)use($key,$id){
                    $item->where([
                        ['settables.settable_part', $key],
                        ['settables.set_id', $id]
                    ]);
                })->get(['id', 'name', 'description',]);
                $arr2 = DummyProduct::whereHas('sets', function($item)use($key,$id){
                    $item->where([
                        ['settables.settable_part', $key],
                        ['settables.set_id', $id]
                    ]);
                })->get(['id', 'name', 'description']);
                $items[$key] = $arr1->merge($arr2);
                $isEmpty += count($arr1) + count($arr2);
            }
            return [
                'data' => $set,
                'items' => $items,
                'isEmpty' => $isEmpty
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

    public function removeItem(Request $request)
    {
        try{
            $set_id = $request->set_id;
            $set_key = $request->item_key;
            $item_id = $request->item['id'];
            if(isset($request->item['rates'])){
                $sb = Set::find($set_id);
                $sb->products()
                ->wherePivot('settables.settable_id', $item_id)
                ->wherePivot('settables.settable_part', $set_key)
                ->detach();

                return [
                    'data' => $sb,
                    'type' => 'success',
                    'message' => 'Item successfully removed...'
                ];
            }else{
                $sb = Set::find($set_id);
                $sb->dummyProducts()
                ->wherePivot('settables.settable_id', $item_id)
                ->wherePivot('settables.settable_part', $set_key)
                ->detach();

                return [
                    'data' => $sb,
                    'type' => 'success',
                    'message' => 'Item successfully removed...'
                ];
            }
        }catch(Exception $e){
            return [
                'data' => $request,
                'type' => 'error',
                'message' => $e->getMessage()
            ];
        }
    }
}
