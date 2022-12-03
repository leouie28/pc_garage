<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Pdf</title>
    <style>
    #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }

    #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2;}

    #customers tr:hover {background-color: #ddd;}

    #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
    }
    </style>
</head>
<body>
    <h1 style="text-align: center;">{{ date('Y-m-d') }} Product Sales</h1>
    <table id="customers">
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Cost Price</th>
        <th>Selling Price</th>
        <th>Profit</th>
    </tr>
    @if(count($sales))
        @foreach($sales as $sale)
            <tr>
                <td>{{$sale->id}}</td>
                <td>{{$sale->name}}</td>
                <td>{{$sale->total}}</td>
                <td>{{$sale->cost_price}}</td>
                <td>{{$sale->price}}</td>
                <td>{{($sale->price - $sale->cost_price) * $sale->total}}</td>
            </tr>
        @endforeach
    @else
    <tr>
        <td colspan="10" style="text-align:center;">No record</td>
    </tr>
    @endif
    </table>
</body>
</html>