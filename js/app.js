// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$('.gallery a').colorbox({
    rel: 'galleryname'
});

$(window).on('scroll', function() {
    var y = $(window).scrollTop();
    $(".is-post .hero").css('background-position', '0px ' + (-50 - y / 3) + 'px');
});