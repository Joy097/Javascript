function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.onload(){
        const content = document.getElementById('demo')
        content.innerHTML = xhr.responseText;
    }

    xhr.
}