<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $user = Auth::guard('web')->user();
            $cart = Cart::where('client_id', '=', $user->id)
            ->with('product', function($item) {
                return $item->withSum('stocks', 'stocks.stocks');
            })->get();
    
            return $cart;
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
            $user = Auth::guard('web')->user();
            $cart = Cart::where([
                ['client_id', '=', $user->id],
                ['product_id', '=', $request->product_id]
            ])->first();
            if($cart){
                $cart->quantity = $cart->quantity + $request->quantity;
                $cart->save();

                return [//return alert
                    "data" => $cart,
                    "type" => "success",
                    "message" => "Cart successfully updated!",
                ];
            }else{
                $cart = Cart::create([
                    'client_id' => Auth::guard('web')->user()->id,
                    'product_id' => $request->product_id
                ]);

                return [//return alert
                    "data" => $cart,
                    "type" => "success",
                    "message" => "Cart successfully added!",
                ];
            }
        }catch(Exception $e){
            return [//return alert
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

    public function removeCarts(Request $request)
    {
        try{
            $val = array();
            foreach($request->ids as $cart){
                // $val[] = $cart;
                $del = Cart::find($cart);
                $del->delete();
            }
            // return $request;
            return $this->index();
        }catch(Exception $e){
            return $e->getMessage();
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
        //
    }
}
