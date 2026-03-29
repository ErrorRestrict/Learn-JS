const star  = document.querySelector('#star')

star.addEventListener('mousedown',Start);
star.addEventListener('mouseup',Stop);


function Start(e) {
 document.addEventListener('mousemove', move);

};

function move(e){

star.style.left = `${e.x}px`;
star.style.top = `${e.y}px`;
}

function Stop() {
document.removeEventListener('mousemove',move);

}