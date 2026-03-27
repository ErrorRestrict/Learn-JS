const heading = document.createElement('h1');
heading.innerText = " TODO LIST";
document.body.appendChild(heading);

const list = document.createElement('ul');
document.body.appendChild(list);

function add(item){
    const li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);

}


function toggle(item){
    item.classList.toggle('complete');
}


function destroy(item) {

    item.remove();
}

add('PVR');
add('IMAX')
add('Movie')
add('HArry Potter')

toggle(list.children[1]);

destroy(list.children[2]);