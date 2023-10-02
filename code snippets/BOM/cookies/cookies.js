function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + exdays*24*60*60*1000);
}