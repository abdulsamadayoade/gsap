$(document).ready(function () {
    TweenMax.set('.project-preview', {width: 0});

    var t1 = new TimelineLite();

    $(document).on('mouseover', '.navigation-item', function (evt) {
        t1 = new TimelineLite();
        t1.to($('.project-preview'), 1, {
            width: '600px',
            ease: Expo.easeInOut
        });
    }).on('mouseout', '.navigation-item', function (evt) {
        t1 = new TimelineLite();
        t1.to($('.project-preview'), 0.5, {
            width: 0,
            ease: Expo.easeInOut
        });
    });
});

$('.navigation-link-1').hover(function () {
    $('.project-preview').css({'background-image': 'url(images/1.jpeg)'});
});

$('.navigation-link-2').hover(function () {
    $('.project-preview').css({'background-image': 'url(images/2.jpg)'});
});

$('.navigation-link-3').hover(function () {
    $('.project-preview').css({'background-image': 'url(images/3.jpg)'});
});

$('.navigation-link-4').hover(function () {
    $('.project-preview').css({'background-image': 'url(images/4.jpg)'});
});

$('.navigation-link-5').hover(function () {
    $('.project-preview').css({'background-image': 'url(images/5.jpg)'});
});

$('.navigation-link-6').hover(function () {
    $('.project-preview').css({'background-image': 'url(images/6.jpg)'});
});

$('.navigation-link-7').hover(function () {
    $('.project-preview').css({'background-image': 'url(images/7.jpeg)'});
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $('.progressbar').css('height', scrollPercent + '%');
});