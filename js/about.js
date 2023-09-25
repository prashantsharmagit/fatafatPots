$(document).ready(function () {
    // Add a click event handler for all <a> elements
    $("#showMore").click(function (event) {
        event.preventDefault();
        // Toggle the visibility of the next div with class "hide"
        $(this).prev('.hide').slideToggle();
        // Change the text of the link
        $(this).text(function (_, text) {
            return text === 'Show more' ? 'Show less' : 'Show more';
        });
    });
})