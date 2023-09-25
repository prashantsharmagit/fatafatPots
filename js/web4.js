$(document).ready(function() {
    $('#container1').jtable({
        title : 'PRODUCT',
        paging : true,
        pageSize : 10,
        sorting : true,
        defaultSorting : 'product_inventory_value DESC',
        actions : {
            listAction : 'GENJSON2.aspx?jtView=WEB4V'
        },
        fields : {
            product_id : {
                title : 'Product ID'
            },
            product_name : {
                title : 'Product Name'
            },
            product_inventory_value : {
                title : 'Product Inventory Value'
            },
        }
    });
    $('#container1').jtable('load');
});