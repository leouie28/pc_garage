<?php

namespace App\Filters;

use App\Models\SkuProfile;

class SkuProfileFilter
{

  public function __construct()
  {
    $this->model = SkuProfile::query();
  }

  public function searchable()
  {
    $this->searchColumns();
    $this->sortBy();
    $this->orderCount();
    $per_page = Request()->per_page;
    if ($per_page == '-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
    // $this->model->where('isadmin', false);
    return $this->model->with('products', function($item) {
        return $item->with('product');
    })->withCount('products')
    ->paginate($per_page);
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

  public function orderCount()
  {
    
  }
}
