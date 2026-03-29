// document.addEventListener('click',bang);

// function bang(){
//     document.body.style.backgroundColor = "yellow";
//     document.body.innerHTML = `<h1> BANGGGGG! </h1>`
// }

const RED = document.getElementById('red');

RED.addEventListener('click', e => document.body.style.backgroundColor = "red");



const GREEN = document.getElementById('Green');
GREEN.addEventListener('click' , e => document.body.style.background = e.target.textContent);