function sendRequest(method, url){
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.open(method,url)

    xhr.responseType = 'json';

    xhr.send();

}

function getData(){
    sendRequest('GET','https://jsonplaceholder.typicode.com/todos/1')
}
function sendData(){}

const getBtn = document.getElementById('get');
const sendBtn = document.getElementById('send');

getBtn.addEventListener('click', getData)
sendBtn.addEventListener('click', sendData)