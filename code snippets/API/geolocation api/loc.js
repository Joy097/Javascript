const display = document.getElementById('display');

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        display.innerHTML = "Geolocation is not available"
    }
}

function showPosition(){
    display.innerHTML = 
    "latitude: "+ showPosition.coords.latitude+
    "<br/>Lo"
}