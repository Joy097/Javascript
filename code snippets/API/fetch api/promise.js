const display = document.getElementById('demo');

function getData(){
    fetch("https://www.lipsum.com/");
        .then(res=>console.log(res));
}