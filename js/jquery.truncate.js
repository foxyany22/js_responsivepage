$(function($) {
    $.fn.truncate = function(options) {

        var defaults = {
        length: 300,
        minTrail: 20,
        };

        var options = $.extend(defaults, options);

        return this.each(function() {

            obj = $(this);
            var body = obj.html();

            if (body.length > options.length + options.minTrail) {

                var splitLocation = body.indexOf(' ', options.length);
                if (splitLocation != -1) {
                    var splitLocation = body.indexOf(' ', options.length);
                    var str1 = body.substring(0, splitLocation);
                    var str2 = body.substring(splitLocation, body.length - 1);
                    obj.html(str1 + '<span  class="truncate_more">' + str2 + '</span>');
                    obj.find('.truncate_more').css("display", "none");

                    var moreLink = $(this).parent().find('div.tags .full-text-open');
                    var moreContent = $('.truncate_more', obj);
                    moreLink.click(function() {
                        if (moreLink.text() == '▼') {
                            moreContent.show();
                        }
                        else {
                            moreContent.hide();
                        }
                        return false;
                    });
                }
            }
        });
    };
});
