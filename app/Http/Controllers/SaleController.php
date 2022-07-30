<?php

namespace App\Http\Controllers;

use App\Filters\SaleFilter;
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
        return (new SaleFilter)->searchable();
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

    public function salesWeek()
    {
        try{
            $now = Carbon::now();
            $start = $now->startOfWeek()->toDateString();
            // $end = $now->endOfWeek()->format('Y-m-d');
            $counter = 0;
            $sales = array();

            while($counter < 7){
                $selector = Carbon::parse($start)->addDay($counter)->toDateString();
                $sales[] = Sale::whereDate('date', $selector)->sum('sales');
                $counter++;
            }

            return $sales;
            
        }catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function checkSales()
    {
        try{

            $yesterday = Carbon::yesterday()->toDateString();

            $first_sale = Sale::first(['id']);

            if(!$first_sale){
                $first_order = Order::where('status', '=', 4)->orderBy('date_received', 'asc')->first(['date_received']);
                if($first_order){
                    $first_order = $first_order->date_received;
    
                    if($first_order<=$yesterday){
                        // $orders = Order::where('status', 4)
                        // ->groupBy('date_received')
                        // ->sum('total');
                        
                        $orders = DB::table('orders')
                        ->select(DB::raw('date_received, count(id) as order_count, sum(total) as sales'))
                        ->where('status', 4)
                        ->whereBetween('date_received', [$first_order, $yesterday])
                        ->groupBy('date_received')
                        ->get();
    
                        foreach($orders as $order){
                            $sale = Sale::create([
                                'date' => $order->date_received,
                                'order_count' => $order->order_count,
                                'sales' => $order->sales
                            ]);
                        }
    
                        return 'Sales created';
                    }
                    else{
                        return 'No sales yet.';
                    }
                }else{
                    return 'No order yet.';
                }
            }else{
                $last_sales = Sale::orderBy('date', 'desc')->first(['date']);
                $last_sales = Carbon::parse($last_sales->date)->addDay()->toDateString();

                $unsave_sales = DB::table('orders')
                ->select(DB::raw('date_received, count(id) as order_count, sum(total) as sales'))
                ->where('status', 4)
                ->whereBetween('date_received', [$last_sales, $yesterday])
                ->groupBy('date_received')
                ->get();

                if(count($unsave_sales)>0){
                    foreach($unsave_sales as $order){
                        $sale = Sale::create([
                            'date' => $order->date_received,
                            'order_count' => $order->order_count,
                            'sales' => $order->sales
                        ]);
                    }
                    return 'New Sales created';
                }else{
                    return 'No unsave sales';
                }
            }
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
        try{
            $sale = Sale::create([
                'date' => $request->date,
                'order_count' => $request->order_count,
                'sales' => $request->sales,
            ]);
            $sale->save();
    
            return [
                "data" => $sale,
                "type" => "success",
                "message" => 'Sales successfully added...',
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
        try{
            $sale = Sale::find($id)->update($request->toArray());

            return [
                "data" => $sale,
                "type" => "success",
                "message" => 'Sales successfully updated...',
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sale = Sale::find($id);
        $sale->delete();

        return [
            "data" => $sale,
            "type" => "warning",
            "message" => 'Sales successfully deleted...',
        ];
    }
}
