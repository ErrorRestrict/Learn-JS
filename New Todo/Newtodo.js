const heading = document.createElement('h1');
heading.innerText = "MY LIST";
document.body.appendChild(heading);
document.body.style.backgroundColor = "rgb(88,88,88)";
document.body.style.color = "white";

const list = document.createElement('ul');
document.body.appendChild(list);

function add(item){

    const li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);
}

add('RAM');
add('GPU');
add('CPU');
add('Processor');

function toggle(item){

    item.classList.toggle('complete')
}

toggle(list.children[0]);
toggle(list.lastChild)


