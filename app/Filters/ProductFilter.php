<?php

namespace App\Filters;

use App\Models\Product;
use Illuminate\Support\Facades\Request;

class ProductFilter
{

  public function __construct()
  {
    $this->model = Product::query();
  }

  public function searchable()
  {
    $this->searchColumns();
    $this->filter();
    $this->sortBy();
    $per_page = Request()->per_page;
    if ($per_page == '-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
    // $this->model->where('isadmin', false);
    return $this->model->with('categories')
    ->with('feedback')
    ->withCount('rating')
    // ->withCount('feedbackCount')
    ->withSum('sold', 'order_product.quantity')
    ->withSum('toDeliver', 'order_product.quantity')
    ->withSum('pending', 'order_product.quantity')
    ->withSum('canceled', 'order_product.quantity')
    ->withSum('stocks', 'stocks.stocks')->paginate($per_page);
  }

  public function filter()
  {
    if(Request()->filter && Request()->filter != null){
      $filter = explode("~", Request()->filter);
      $key = $filter[1];
      
      $this->model->whereHas($filter[0], function($item) use ($key) {
        return $item->where('category_id', $key);
      });
    }
  }

  public function searchColumns()
  {
    $searchable = ['name'];
    if (Request()->keyword && Request()->keyword != "null") {
      $keyword = Request()->keyword;
      foreach ($searchable as $column) {
        if ($column == 'name') {
          $this->model->orWhere($column, 'like', "%" . $keyword . "%");
        }
      }
    }
  }

  public function sortBy()
  {
    if (Request()->sortBy) {
      $sortByFilters = explode(',', Request()->sortBy);
      foreach ($sortByFilters as $key => $filter) {
        if (empty($filter)) continue;

        $exactSortKey = explode('/', $filter)[0];
        $exactSortType = explode('/', $filter)[1];
        if ($exactSortKey == 'level') {
          $this->model->join('levels', 'levels.id', '=', 'courses.level_id')
            ->select('levels.difficulty', 'courses.*')
            ->orderBy('levels.difficulty', $exactSortType);
        } elseif ($exactSortKey == 'fullname') {
          $this->model->orderBy('last_name', $exactSortType);
        } elseif ($exactSortKey == 'dates') {
          $this->model->orderBy('date_from', $exactSortType);
        } else {
          $this->model->orderBy($exactSortKey, $exactSortType);
        }
      }
    } else {
      $this->model->orderBy('id', 'desc');
    }
  }
}
