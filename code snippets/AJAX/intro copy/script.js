function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        const content = document.getElementById('demo')
        content.innerHTML = xhr.responseText;

        console.log(xhr.getAllResponseHeaders); //reponse header
        console.log(xhr.getResponseHeader("etag"));
    }

    xhr.open('GET',"./data/data.txt",true); //async or sync permission on 3rd
    xhr.send();
}