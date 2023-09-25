$(document).ready(function() {
    $('#container1').jtable({
        title : 'Order Totals',
        paging : true,
        pageSize : 10,
        sorting : true,
        defaultSorting : 'order_total DESC',
        actions : {
            listAction : 'GENJSON2.aspx?jtView=WEB3V'
        },
        fields : {
            customer_name : {
                title : 'Customer Name'
            },
            order_id : {
                title : 'Order ID'
            },
            order_total : {
                title : 'Order Total'
            }
        }
    });
    $('#container1').jtable('load');
});