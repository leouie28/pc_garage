<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function getItems(Request $request)
    {
        try{
            $result = array();
            $items = explode(",", $request->items);
            foreach($items as $item){
                $data = explode("~", $item);
                $result[] = Product::withSum('stocks', 'stocks.stocks')
                ->find($data[0])->setAttribute('quantity', $data[1]);
            }
            return $result;
        }catch(Exception $e){
            return $e->getMessage();
        }
    }
}
