document.addEventListener('mousemove',showmouse);

function showmouse(e){
document.body.textContent =    `(${e.x} , ${e.y})`
}