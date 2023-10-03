function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        const content = document.getElementById('demo')
        content.innerHTML = xhr.responseText;
    }

    xhr.open('GET',"./data/data.txt");
    xhr.send();
}