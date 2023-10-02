function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + exdays*24*60*60*1000);
    let expires = "expires=" + d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}
function getCookie(cname){
    arr = document.cookie.split("=");
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}