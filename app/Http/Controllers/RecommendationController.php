<?php

namespace App\Http\Controllers;

use App\Filters\RecommendationFilter;
use App\Models\Admin;
use App\Models\Recommendation;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecommendationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new RecommendationFilter)->searchable();
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
            $rmd = Recommendation::create([
                'recommendation' => $request->text,
                'customer_id' => Auth::guard('web')->user()->id,
            ]);

            $admins = Admin::all();
            $customer = Auth::guard('web')->user();
            foreach($admins as $admin){
                $this->makeNotify(
                    $id = $admin->id,
                    $type = 'App\Models\Admin',
                    $data = array(
                        "name" => $customer->first_name.' '.$customer->last_name,
                        "text" => 'submit recommendation',
                        "link" => '/recommendation',
                        "icon" => 'message-processing',
                    )
                );
            }

            return [
                'data' => $rmd,
                'type' => 'success',
                'message' => 'Recommendation submitted...'
            ];
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

    public function markRead($id)
    {
        try{
            $read = Recommendation::find($id);
            $read->status = 1;
            $read->save();

            $this->makeNotify(
                $id = $read->customer_id,
                $type = 'App\Models\Customer',
                $data = array(
                    "name" => 'Admin',
                    "text" => 'read your recommendation',
                    "link" => 'recommendations',
                    "icon" => 'message-reply-text',
                )
            );

            return [
                'data' => $read,
                'type' => 'success',
                'message' => 'Recommendation successfully mark as read...',
            ];
        }catch(Exception $e){
            return [
                'data' => $id,
                'type' => 'error',
                'message' => $e->getMessage(),
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
