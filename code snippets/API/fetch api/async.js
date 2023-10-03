const display = document.getElementById('demo');

async function getData(){
    const res = await fetch("http://127.0.0.1:5500/API/fetch%20api/data.txt")
    const data = await res.text();
    display.innerHTML = data
}