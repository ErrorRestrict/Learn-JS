const list = document.getElementById('list');
list.style.width = '300px'
list.style.border = "2px solid green"

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');

taskForm.addEventListener('submit', addTask);

function addTask(e){
    e.preventDefault();

    const task = document.createElement('li');
    task.textContent = taskInput.value;

    // Remove button
    const remove = document.createElement('button');
    remove.textContent = "Remove";
    remove.style.marginLeft = "10px";

    // Completed button
    const completed = document.createElement('button');
    completed.textContent = "completed";
    completed.style.margin = "20px";

    task.appendChild(remove);
    task.appendChild(completed);

    list.appendChild(task);

    taskInput.value = "";
}

list.addEventListener('click', function(e){

    if(e.target.textContent === "Remove"){
        e.target.parentElement.remove();
    }

    if(e.target.textContent === "completed"){
        e.target.parentElement.style.textDecoration = "line-through";
        e.target.parentElement.style.color = "red";
    }

});