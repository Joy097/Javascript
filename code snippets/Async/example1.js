const payment = true;
function enroll(callback){
    console.log('Enrolling');
    setTimeout(function(){
        if(payment) callback();
        else console.log('Payment not cleared');
    },2000)

}
function progress(callback){
    console.log('Enrolling');
    setTimeout(function(){
        if(payment) callback();
        else console.log('Payment not cleared');
    },2000)
}
function getCertificate(callback){
    console.log('Congrats! Your are getting certificate');
}

enroll()