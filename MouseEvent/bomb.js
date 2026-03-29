const bomb = document.createElement('div')

bomb.textContent = '💣';
bomb.style.position = 'absolute';
bomb.style.top = Math.floor(200*Math.random()) 
+ 'px';
bomb.style.left = Math.floor(200*Math.random()) 
+ 'px';
bomb.style.fontSize = '64px'
document.body.appendChild(bomb);


bomb.addEventListener('mouseover',boom);

function boom(){
    document.body.style.backgroundColor = 'red';
    document.body.innerHTML = '<h1>BOMMMMMMMMM</h1>';
}