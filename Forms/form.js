const form = document.forms.myForm;

const hello = document.getElementById('hello');

form.addEventListener('submit' , sayhello);

function sayhello(e){

    e.preventDefault();
    hello.textContent = `Hello, ${form.myName.value}`;

}

