document.addEventListener('mousemove', e => {
    gsap.to('.text', {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.02
    });
});