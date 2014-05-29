// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$('.gallery a').colorbox({
    rel: 'galleryname'
});
var pageHeight = $(window).height();
var y = $(window).scrollTop() * 100 / pageHeight;
//$(".is-post .hero").css('background-position', '0px ' + (-50 - y / 3) + 'px');
$('.is-post .hero').stop().animate({
    'background-position-x': '0',
    'background-position-y': 50 + y + "%"
}, 10000, 'linear');
$(window).on('scroll', function() {
    var pageHeight = $(window).height();
    var y = $(window).scrollTop() * 100 / pageHeight;
    //$(".is-post .hero").css('background-position', '0px ' + (-50 - y / 3) + 'px');
    $('.is-post .hero').stop().animate({
        'background-position-x': '0',
        'background-position-y': 50 + y + "%"
    }, 500, 'linear');
});