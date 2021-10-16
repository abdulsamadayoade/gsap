const tl = new gsap.timeline();
tl.from(".page__inner span, .logo",{
    duration: .8,
    stagger: {
        amount: .7
    },
    y: 200,
    skewY: 10,
    opacity: 0
})
tl.from(".home-btn", {
    scale: 0,
    duration: .5,
    stagger: {
        amount: .6
    }
},"-=.4")