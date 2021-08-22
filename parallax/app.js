var img1 = document.getElementsByClassName('img1')
new simpleParallax(img1, {
    scale: 1.8,
    orientation: 'down'
});

var img2 = document.getElementsByClassName('img2')
new simpleParallax(img2, {
    scale: 2.1,
    orientation: 'up'
});

var img3 = document.getElementsByClassName('img3')
new simpleParallax(img3, {
    scale: 1.6,
    orientation: 'right'
});

var img4 = document.getElementsByClassName('img4')
new simpleParallax(img4, {
    scale: 1.8,
    orientation: 'up-left'
});

var h1 = document.getElementsByClassName('h1')
new simpleParallax(h1, {
    scale: 1.5,
    orientation: 'left'
});