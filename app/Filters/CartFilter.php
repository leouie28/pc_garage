<?php

namespace App\Filters;

use App\Models\Cart;

class CartFilter
{

  public function __construct()
  {
    $this->model = Cart::query();
  }

  public function searchable()
  {
    $per_page = Request()->per_page;
    if ($per_page == '-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
    // $this->model->where('isadmin', false);
    return $this->model->paginate($per_page);
  }

}
