function sendRequest(method, url, data){

    const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        resolve(xhr.response);
    };

    xhr.open(method,url)
    xhr.responseType = 'json';
    xhr.send(data);

    })   

    return promise;
}

function getData(){
    sendRequest('GET','https://jsonplaceholder.typicode.com/todos/1')
    .then((responseData) => {
        console.log(responseData);
    });
}

function sendData(){
    sendRequest('POST','https://jsonplaceholder.typicode.com/posts',
    JSON.stringify({
        title:"foo",
        body:"bar",
        userId:1
    })
    ).then((responseData) => {
        console.log(responseData);
    });
}

const getBtn = document.getElementById('get');
const sendBtn = document.getElementById('send');

getBtn.addEventListener('click', getData)
sendBtn.addEventListener('click', sendData)