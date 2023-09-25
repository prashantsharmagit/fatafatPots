$(document).ready(function() {
    $('#container1').jtable({
        title : 'Customer Orders',
        paging : true,
        pageSize : 10,
        sorting : true,
        defaultSorting : 'customer_name, order_date, order_number',
        actions : {
            listAction : 'GENJSON2.aspx?jtView=WEB2V'
        },
        fields : {
            customer_name : {
                title : 'Customer Name'
            },
            order_number : {
                title : 'Order Number'
            },
            order_date : {
                title : 'Order Date'
            },
            product_id : {
                title : 'Product ID'
            },
            description : {
                title : 'Description'
            },
            quantity : {
                title : 'Quantity'
            },
            price : {
                title : 'Price'
            },
            extended_price : {
                title : 'Extended Price'
            }
        }
    });
    $('#container1').jtable('load');
});