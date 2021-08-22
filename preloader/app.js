const tll = gsap.timeline({
    paused: "true"
});

tll.to("#percent, #bar",{
    duration:.2,
    opacity: 0,
    zIndex: -1
});

tll.to("#preloader",{
    duration: .8,
    width: "0%"
});

tll.from(".container",{
    duration: 1.5,
    y: "-150%"
},"-=.2");

tll.to(".container h1",{
    opacity:1
});

let width = 1;
let bar = document.getElementById("barconfrm");
let id;

function move(){
    id = setInterval(frame,10);

}
function frame(){
    if(width>=100){
        clearInterval(id);
        tll.play();
    }
    else{
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}