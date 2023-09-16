const payment = true;
const marks = 70

function enroll(callback){
    console.log('Enrolling');
    setTimeout(function(){
        if(payment) callback();
        else console.log('Payment not cleared');
    },2000)
}

function progress(callback){
    console.log('Course in progress');
    setTimeout(function(){
        if(marks>=80) callback();
        else console.log('Your mark is poor');
    },3000)
}

function getCertificate(){
    console.log('Congrats! Your are getting certificate');
}

enroll(function(){
    progress(getCertificate);
})