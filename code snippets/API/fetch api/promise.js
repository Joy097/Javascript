const display = document.getElementById('demo');

function getData(){
    fetch("http://127.0.0.1:5500/API/fetch%20api/data.txt")
    .then(res => res.text())
    .then(data => {
        console.log("async pro2")
        display.innerHTML = data
    });
    console.log("async pro1")
}