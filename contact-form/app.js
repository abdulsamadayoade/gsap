const tl = gsap.timeline();
tl.from('.cpage', {
    duration: 2,
    y: '-100%',
    opacity: 0
});

tl.from('.footer', {
    duration: 1,
    y: '100%',
    opacity: 0
}, '-=.5');