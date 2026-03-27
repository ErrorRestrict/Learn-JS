const task = document.getElementById('task')

const Study = task.children[1];
const Office = task.children[2];

const Bath = document.createElement('li')
Bath.textContent = 'Bath';
task.insertBefore(Bath,Study);

const bathing = task.children[1];

const Game = document.createElement('li');
const text = document.createTextNode('Playing Time')
Game.appendChild(text);
task.insertBefore(Game,bathing);
Game.setAttribute('class','PW');

const coding = document.createElement('li');
coding.innerHTML = `Coding`;
task.replaceChild(coding,Study);

Office.className="PW";
Office.classList.add('Personal')
Office.classList.remove('Personal');

Office.style.border= "2px solid red";
Office.style.width = "50px";

task.style.border = "2px solid blue";
task.style.backgroundColor = "rgb(208, 232, 227)"