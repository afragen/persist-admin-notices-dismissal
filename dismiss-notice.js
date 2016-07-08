(function ($) {
    //shorthand for ready event.
    $(function () {
        $('div[data-dismissible] button.notice-dismiss').click(function (event) {
            event.preventDefault();
            var $el = $('div[data-dismissible]');

            var attr_value, option_name, dismissible_length, data;

            attr_value = $el.attr('data-dismissible').split('-');

            // remove the dismissible length from the attribute value and rejoin the array.
            dismissible_length = attr_value.pop();

            option_name = attr_value.join('-');

            data = {
                'action': 'dismiss_admin_notice',
                'option_name': option_name,
                'dismissible_length': dismissible_length
            };
            
            // We can also pass the url value separately from ajaxurl for front end AJAX implementations
            $.post(ajaxurl, data);
        });
    })

}(jQuery));