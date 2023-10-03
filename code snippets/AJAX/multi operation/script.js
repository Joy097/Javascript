function loadData(callback){
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        callback(xhr);
    }

    xhr.open('GET',"./data/data.txt");
    xhr.send();
}

function myCallback1(xhr){
    const content = document.getElementById('demo')
    content.innerHTML = xhr.responseText;
}

function myCallback2(xhr){
    const content = document.getElementById('demo2')
    content.innerHTML = xhr.responseText;
}