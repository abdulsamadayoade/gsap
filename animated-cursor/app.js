const links = document.querySelectorAll('.hover-this');
const cursor = document.querySelector('.cursor');


const animateit = function (e) {
    const span = this.querySelector('span');
    const {offsetX: x, offsetY:y} = e,
    {offsetWidth: width, offsetHeight: height} = this,

    move = 25,
    xMove = x / width * (move * 2) - move,
    yMove = y / height * (move * 2) - move;

    console.log(y);

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') {
        span.style.transform = '';
    }
};

const editCursor = e => {
    const {clientX: x, clientY: y} = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
}

links.forEach(link => link.addEventListener('mousemove', animateit));
links.forEach(link => link.addEventListener('mouseleave', animateit));
window.addEventListener('mousemove', editCursor);