const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-item a');

gsap.from('.navbar', {left: '-20%', duration: 2, delay: 0.4, ease: 'expo.inOut'});

let tl = gsap.timeline({paused: true});

tl.to('.nav', {width: '94%', duration: 1.8, ease: 'expo.inOut'});

tl.to('.nav-item a', {top: '0px', duration: 0.6, stagger: 0.2, ease: 'expo.inOut'});



navToggle.addEventListener('click', function () {
    tl.resume();
});


navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function () {
        tl.reverse();
    });
});

// t1.staggerTo(".nav-item a", 0.6, { top: "0px", ease: Expo.easeInOut }, 0.1, "-=0.8");