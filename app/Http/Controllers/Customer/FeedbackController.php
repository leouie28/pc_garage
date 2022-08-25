<?php

namespace App\Http\Controllers\Customer;

use App\Filters\FeedbackFilter;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Feedback;
use App\Models\Image;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new FeedbackFilter)->searchable();
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
            $fb = Feedback::create([
                'product_id' => $request->product_id,
                'customer_id' => Auth::guard('web')->user()->id,
                'order_id' => $request->order_id,
                'rating' => $request->rating,
                'text' => $request->text,
            ]);
            if($request->image){
                $file = uploadImage(
                    $request->image,
                    'images/feedback/' . $fb->id . '/'
                );
                // $product->images()->attach($file);
                $image = Image::create([
                    'imagable_id' => $fb->id,
                    'imagable_type' => 'App\Models\Feedback',
                    'file_name' => $file
                ]);
            }
            $admins = Admin::all();
            $customer = Auth::guard('web')->user();
            foreach($admins as $admin){
                $this->makeNotify(
                    $id = $admin->id,
                    $type = 'App\Models\Admin',
                    $data = array(
                        "name" => $customer->first_name.' '.$customer->last_name,
                        "text" => 'submit feedback',
                        "link" => 'product',
                        "icon" => 'comment-processing',
                    )
                );
            }
            return [
                "data" => $fb,
                "type" => "success",
                "message" => 'Feedback submitted...',
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
