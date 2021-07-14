let tl = new TimelineMax({paused: true});

tl.to('.one', 0.8, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});

tl.to('.two', 0.8, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
});

tl.to('.menu', 2, {
    top: '0%',
    ease: Expo.easeOut,
    delay: -2
});

tl.staggerFrom('.menu ul li', 2, {
    x: -200,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.3);

tl.reverse();

$(document).on('click', '.toggle-btn', function () {
    tl.reversed(!tl.reversed());
});

$(document).on('click', 'a', function () {
    tl.reversed(!tl.reversed());
});