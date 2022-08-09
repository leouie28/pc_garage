<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            if(Request()->input('status')){
                if(Request()->status=='pending'){
                    return Order::where([
                        ['status', 1],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->with('products')->orderBy('id', 'desc')->get();
                }elseif(Request()->status=='delivery'){
                    return Order::where([
                        ['status', 2],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->orWhere([
                        ['status', 3],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->with('products')->orderBy('id', 'desc')->get();
                }elseif(Request()->status=='received'){
                    return Order::where([
                        ['status', 4],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->with('products')->orderBy('id', 'desc')->get();
                }
            }
        }catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function orderStat()
    {
        try{
            return [
                'pending' => Order::where([
                        ['status', 1],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->with('products')->count(),
                'delivery' => Order::where([
                        ['status', 2],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->orWhere([
                        ['status', 3],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->with('products')->count(),
            ];
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
            $order = new Order([
                'order_code' => '#' . genareteNumbers(7),
                'total' => $request->total,
                'note' => $request->note,
                'status' => $request->status,
                'customer_id' => Auth::guard('web')->user()->id,
            ]);
            $order->save();
            
            foreach($request->products as $item){
                $product = Product::find($item['id']);
                $order->products()->attach($product->id, ['price' => $product->price, 'quantity' => $item['quantity']]);
                $cart = Cart::where([
                    ['client_id', Auth::guard('web')->user()->id],
                    ['product_id', $item['id']]
                ])->first();
                if($cart){
                    $cart->delete();
                }
            }
            return [
                "data" => Order::find($order->id),
                "type" => "success",
                "message" => "Order successfully added...",
            ];
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
        try{
            $order = Order::with('products')->with('customer')->find($id);
            return $order;
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

    public function cancelOrder($id)
    {
        try{
            $order = Order::find($id);
            $order->status = 0;
            $order->save();

            return [//return alert
                "data" => Order::where([
                                ['status', 1],
                                ['customer_id', Auth::guard('web')->user()->id]
                            ])->with('products')->get(),
                "type" => "success",
                "message" => "Order ".$order->order_code." successfully cenceled...",
            ];
        }catch(Exception $e){
            return [//return alert
                "data" => $id,
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
        //
    }
}
