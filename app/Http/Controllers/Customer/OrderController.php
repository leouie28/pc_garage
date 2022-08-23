<?php

namespace App\Http\Controllers\Customer;

use App\Events\OrderProcessed;
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
                    ])->with('products')->orderBy('updated_at', 'desc')->get();
                }elseif(Request()->status=='delivery'){
                    return Order::where([
                        ['status', 2],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->orWhere([
                        ['status', 3],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->with('products')->orderBy('updated_at', 'desc')->get();
                }elseif(Request()->status=='received'){
                    return Order::where([
                        ['status', 4],
                        ['customer_id', Auth::guard('web')->user()->id]
                    ])->with('products')->orderBy('updated_at', 'desc')->get();
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
            event(new OrderProcessed($user = Auth::guard('web')->user()));
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
            $order = Order::with('customer')
            ->with('products', function($item) use ($id) {
                return $item->with('feedback', function($fb) use ($id) {
                    $fb->where([
                        ['customer_id', '=', Auth::guard('web')->user()->id],
                        ['order_id', '=', $id]
                    ]);
                });
            })->find($id);
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

    public function receiveOrder($id)
    {
        try{
            $order = Order::find($id);
            $order->status = 4;
            $order->date_received = date('Y-m-d');
            $order->save();

            return [
                "data" => $order,
                "type" => "success",
                "message" => 'Order successfully mark as read...',
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
