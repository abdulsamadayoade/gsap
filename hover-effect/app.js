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