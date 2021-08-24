gsap.to('.header', {
    backgroundColor: '#c9c9c9',
    duration: 2,
    delay: .5,
});

gsap.from('.header__nav', {
    y: '-100%',
    opacity: 0,
    duration: 1.5,
    stagger: {
        amount: .4
    }
});

const tl = gsap.timeline({
    paused: true
});

tl.to('.overlay-1', {
    height: '100%'
});

tl.to('.overlay-2', {
    height: '100%'
});

tl.to('.overlay-3', {
    height: '100%'
});

tl.to('.overlay-4', {
    height: '100%'
});

const tl1 = gsap.timeline({
    paused: true
});

tl1.to('.header__logo, .btn', {
    color: '#fff'
});

tl1.to('.menu', {
    y: '0%',
    delay: 2
});

const openBtn = document.querySelector('.btn--open');
const closeBtn = document.querySelector('.btn--close');

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';

    tl.play();
    tl1.play();
});

closeBtn.addEventListener('click', () => {
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';

    tl.reverse();
    tl1.reverse();
});

follower = document.querySelectorAll('.cursor');

posX = 0;
posY = 0;
mouseX = 0;
mouseY = 0;

TweenMax.to({},0.016,{
    repeat: -2,
    onRepeat: function(){
        posX += (mouseX  - posX) / 10;
        posY += (mouseY  - posY) / 10;

        TweenMax.set(follower, {
            css: {
                left: posX - 400,
                top: posY - 200
            }
        });
    }
});

document.addEventListener("mousemove", 
function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
});