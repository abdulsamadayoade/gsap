const tl = gsap.timeline();
tl.from('.gallery__container', {
    y: '-150%',
    duration: 5,
    opacity: 0
})
.from('.gallery__heading', {
    opacity: 0
})
.to('.gallery__heading', {
    left: 0,
    duration: 1,
    opacity: 1
})
.from('.gallery__container--box', {
    scale: 1.7,
    duration: 2,
    stagger: {
        amount: .4
    }
}, '-=3');