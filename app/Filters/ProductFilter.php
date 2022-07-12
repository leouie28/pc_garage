<?php

namespace App\Filters;

use App\Models\Product;

class ProductFilter {
    public function __construct()
    {
        $this->model = Product::query();
    }

    public function searchable()
    {
        $per_page = Request()->per_page;
        if($per_page == '-1' || !$per_page) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }
}