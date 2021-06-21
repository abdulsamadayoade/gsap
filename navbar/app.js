CustomEase.create("hop", "M0,0 C0.83,0.134 0.92,0.24 1,1 ")

gsap.to(".preloader", {transform: 'translateY(-100vh)', duration: 2, delay: 2, ease: 'hop'});
gsap.to(".header", {transform: 'translateY(-100vh)', duration: 1.5, delay: 2, ease: 'hop'});