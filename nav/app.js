let tl = gsap.timeline({ paused: true });

tl.to('.one', {
    duration: 0.8,
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});

tl.to('.two', {
    duration: 0.8,
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
});

tl.to('.menu', {
    duration: 2, 
    top: '0%',
    ease: Expo.easeInOut,
    delay: -2
});


tl.from('.menu ul li', {
    duration: 2,
    x: -200,
    opacity: 0,
    ease: Expo.easeInOut,
    stagger: 0.3
});

tl.reverse();

const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', function () {
    tl.reversed(!tl.reversed());
});

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        tl.reversed(!tl.reversed());
    });
});