(function ($) {
    $.fn.highlightMenu = function (options) {
        var defaults = $.extend({
            'bgColor': '#3333',
            'color': '#ffff',
        }, options);
        return this.each(function () {
            var items = $("li a");
            var o = defaults;
            items.css('font-family', "Lato, sans-serif")
                .css('font-weight', 'none')
                .css('text-decoration', 'none')
                .css('background-color', o.bgColor)
                .css('color', o.color)
                .css('width', o.linkWidth);
            items.mouseover(function () {
                $(this).css('background-color', o.hoverBgColor)
                    .css('color', o.hoverColor);
            });
            items.mouseout(function () {
                $(this).css('background-color', o.bgColor)
                    .css('color', o.color);
            });
        });
    }
})(jQuery);
