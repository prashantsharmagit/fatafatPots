$(document).ready(function () {

    var slider = $("#image_list");
    var leftProperty, newleftProperty;

    $("#right_button").click(function () {
        leftProperty = parseInt(slider.css("left"));
        if (leftProperty - 300 <= -900) {
            newleftProperty = 0;
        }
        else {
            newleftProperty = leftProperty - 300;
        }
        slider.animate({ left: newleftProperty }, 1000);
    });

    $("#left_button").click(function () {
        leftProperty = parseInt(slider.css("left"));
        if (leftProperty <= 0) {
            newleftProperty = leftProperty + 300;
        }
        else {
            newleftProperty = 0;
        }
        slider.animate({ left: newleftProperty }, 1000);
    });


    $("#image_list img").click(function (event) {
        event.preventDefault();
        var imgSrc = $(this).attr("src");
        $("#image").attr("src", imgSrc);
    });
});