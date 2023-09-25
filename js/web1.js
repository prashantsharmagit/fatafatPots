$(document).ready(function() {
    $('#container1').jtable({
        title : 'PRODUCT',
        paging : true,
        pageSize : 10,
        sorting : true,
        defaultSorting : 'productid',
        actions : {
            listAction : 'GENJSON2.aspx?jtView=WEB1V'
        },
        fields : {
            productid : {
                title : 'Product ID'
            },
            description : {
                title : 'Description'
            },
            color : {
                title : 'Color'
            },
            productdimension : {
                title : 'Dimensions'
            },
            itemweightinkg : {
                title : 'Weight(kg)'
            },
            capacityincups : {
                title : 'Capacity(cups)'
            },
            cookingbowlmaterial : {
                title : 'Cooking bowl material'
            },
            energystarcomplaint : {
                title : 'Energy Star Complaint'
            },
            lidmaterial : {
                title : 'Lid Material'
            },
            modelnumber : {
                title : 'Model Number'
            },
            manufacturer : {
                title : 'Manufacturer'
            },
            warranty : {
                title : 'Warranty'
            },
        }
    });
    $('#container1').jtable('load');
});