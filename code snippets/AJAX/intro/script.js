function loadData(){
    const xhttpr = new XMLHttpRequest();

    xhttpr.onload = function(){
        const container = document.getElementById('demo')
        demo.innerHTML = xhttpr.responseText
    }

    xhttpr.open("GET", );
}