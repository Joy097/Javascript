function getData(){
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1')

}
function sendData(){}

const getBtn = document.getElementById('get');
const sendBtn = document.getElementById('send');

getBtn.addEventListener('click', getData)
sendBtn.addEventListener('click', sendData)