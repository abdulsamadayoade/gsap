const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-item a');

let tl = gsap.timeline({paused: true});

tl.to('.nav', {width: '94%', duration: 1.8, ease: 'expo.inOut'});

tl.to('.nav-item a', {top: '0px', duration: 0.6, stagger: 0.2, ease: 'expo.inOut'});

tl.reverse();

navToggle.addEventListener('click', function () {
    tl.reversed(!tl.reversed());
});

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function () {
        tl.reverse();
    });
});