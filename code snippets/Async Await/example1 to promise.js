const payment = true;
const marks = 70

function enroll(callback){
    console.log('Enrolling');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(payment) resolve();
            else reject('Payment not cleared');
        },2000)
    })

    return promise
}

function progress(callback){
    console.log('Course in progress');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks>=80) resolve();
            else reject('Your mark is poor');
        },3000)
    
    })

    return promise
}

function getCertificate(){
    const promise = new Promise(function)
}

enroll(function(){
    progress(getCertificate);
})