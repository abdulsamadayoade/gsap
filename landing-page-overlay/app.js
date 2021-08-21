const tl1 = gsap.timeline();
tl1.from('.content', {
    opacity: 1,
    duration: 2,
    skewY: '10%',
    x: '5%'
});

tl1.from('.img-divs', {
    duration: .5,
    opacity: 0,
    y: '5%'
});

const tl = gsap.timeline({
    paused: true
});

tl.to('.menu', {
    y: '0%',
    opacity: 1
});

tl.from('.ul', {
    duration: .5,
    opacity: 0,
    y: '-20%',
    stagger: {
        amount: .4
    }
});

tl.from('.showcase', {
    duration: 1,
    x: '-4%',
    opacity: 0,
    stagger: {
        amount: .4
    }
});

const menu = document.getElementById('menu');
const close = document.getElementById('close');
menu.addEventListener('click', () => {
    tl.play();
});

close.addEventListener('click', () => {
    tl.reverse();
});