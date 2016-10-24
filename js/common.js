$(document).ready(function() {

    var isOpened = false;

    $('.tags span').click(function() {
        console.log();
        if (!isOpened) {
            $(this).parent().parent().addClass('full-text');
            $(this).html('&#9660;');
            isOpened = true;
        }
        else {
            $(this).parent().parent().removeClass('full-text');
            $(this).html('&#9650;');
            isOpened = false;
        }
    });

    $('.description').truncate({
        length: 120,
        minTrail: 10,
    });

    function activeHover() {
        if ($(window).width() > 620) {
            $('.container ul li').bind('mouseenter mouseleave');
            $('.container ul li').hover(
                function() {
                $('.trash', this).show();
                $('.like', this).show();
                },
                function() {
                $('.trash', this).hide();
                $('.like', this).hide();
            });
        }
        else {
            $('.container ul li').unbind('mouseenter mouseleave');
        }
    }

    activeHover();
    $(window).on('resize', function() {
        activeHover();
    });
});