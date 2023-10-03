function sendRequest(method, url){

    const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        resolve(this.response);
    }

    xhr.open(method,url)
    xhr.responseType = 'json';
    xhr.send();

    })   
}

function getData(){
    sendRequest('GET','https://jsonplaceholder.typicode.com/todos/1')
    .then(responseData => console.log(responseData));
}

function sendData(){}

const getBtn = document.getElementById('get');
const sendBtn = document.getElementById('send');

getBtn.addEventListener('click', getData)
sendBtn.addEventListener('click', sendData)