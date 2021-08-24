const tl = gsap.timeline();
tl.from(".text",{
    duration: 1.8,
    delay: .5,
    opacity: 0,
    ease: "power4.out",
    x: -150,
    y: -80,
    skewX: 20
});

tl.from(".header__logo, .header__menu",{
    duration: .6,
    y: -80,
    stagger:{
        amount: .4
    }
},"-=.3");

tl.from(".img1",{
    duration: 1,
    position: "absolute",
    top: "100%",
    left: "50%",
    ease: "power2.out",
    x: "-50%",
    y: "-50%",
    filter: "grayscale(1)"
});

tl.from(".img2",{
    duration: 1.5,
    position: "absolute",
    top: "100%",
    left: "50%",
    ease: "power2.out",
    x: "-50%",
    y: "-50%",
    filter: "grayscale(1)"
},"-=.5");

tl.from(".img3",{
    duration: 1.5,
    position: "absolute",
    top: "100%",
    left: "50%",
    ease: "power2.out",
    x: "-50%",
    y: "-50%",
    filter: "grayscale(1)"
},"-=.5");

tl.from(".img4",{
    duration: 1.5,
    position: "absolute",
    top: "100%",
    left: "50%",
    ease: "power2.out",
    x: "-50%",
    y: "-50%",
    filter: "grayscale(1)"
},"-=.5");