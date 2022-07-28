<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Sale;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function checkSales()
    {
        try{
            $first_sale = Sale::first(['id']);
    
            if(!$first_sale){
                $first_order = Order::where('status', '=', 4)->oldest()->first(['created_at']);
                $first_order = $first_order->created_at->format('Y-m-d');
                $yesterday = Carbon::yesterday()->toDateString();

                if($first_order<=$yesterday){
                    $orders = Order::where('status', '=', 4)->get();
                    // ->sum('total');
                    // ->selectRaw('SUM(total) as order_total')
                    // ->get();

                    return $orders;
                }
                else{
                    return 'hello';
                }
            }else{

            }
    
            return $first_sale;
    
            
    
            // $sale = Sale::where('date', '=', $yesterday)->first();
    
            // if(!$sale){
                
            // }else{
            //     return 'Already has data.';
            // }
        }catch(Exception $e){
            return $e->getMessage();
        }
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
        //
    }
}
