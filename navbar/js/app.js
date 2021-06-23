CustomEase.create("hop", "M0,0 C0.83,0.134 0.92,0.24 1,1 ")

gsap.to(".preloader", {transform: 'translateY(-100vh)', duration: 2, delay: 2, ease: 'hop'});
gsap.to(".header", {transform: 'translateY(-100vh)', duration: 1.5, delay: 2, ease: 'hop'});

const home = document.getElementById('home');
const about = document.getElementById('about');
const product = document.getElementById('product');
const gallery = document.getElementById('gallery');
const contact = document.getElementById('contact');
const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const img4 = document.querySelector('.img-4');
const img5 = document.querySelector('.img-5');


home.addEventListener('mouseover', function () {
    img1.classList.add('active');
});

about.addEventListener('mouseover', function () {
    img2.classList.add('active');
});

about.addEventListener('mouseleave', function () {
    img2.classList.remove('active');
});

product.addEventListener('mouseover', function () {
    img3.classList.add('active');
});

product.addEventListener('mouseleave', function () {
    img3.classList.remove('active');
});

gallery.addEventListener('mouseover', function () {
    img4.classList.add('active');
});

gallery.addEventListener('mouseleave', function () {
    img4.classList.remove('active');
});

contact.addEventListener('mouseover', function () {
    img5.classList.add('active');
});

contact.addEventListener('mouseleave', function () {
    img5.classList.remove('active');
});