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
    background-color: #1976d2;
    color: white;
    }
    </style>
</head>
<body>
    <h1 style="text-align: center;">Sales Report</h1>
    <table id="customers">
    <tr>
        <th>Date</th>
        <th>Orders</th>
        <th>Products</th>
        <th>Sales</th>
    </tr>
    @if(count($reports))
        @foreach($reports as $report)
            <tr>
                <td>{{$report->date_received}}</td>
                <td>{{$report->order_count}}</td>
                <td>{{$report->product_count}}</td>
                <td>{{$report->sales}}</td>
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