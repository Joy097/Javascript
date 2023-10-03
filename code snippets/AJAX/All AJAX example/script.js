function sendRequest(method, url, data){

    const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(this.status>=400){
            reject(`There is an application error.
            Status: ${this.status}
            Response Text: ${this.response}`);
        }else{
            resolve(xhr.response);
        }        
    };
    xhr.onerror = function(){
        reject("There was an error");
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
    })
    .catch(err => {
        console.log(err);
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