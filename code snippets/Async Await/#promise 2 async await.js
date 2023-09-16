const payment = true;
const marks = 90

function enroll(){
    console.log('Enrolling');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(payment) resolve();
            else reject('Payment not cleared');
        },2000)
    })

    return promise
}

function progress(){
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
    const promise = new Promise(function(resolve, reject){
        resolve('Congrats! Your are getting certificate')
    })

    return promise
}

async function course(){
    try {
    await enroll()
    await getCertificate()
    const result = await getCertificate()

    console.log(result)}
    
    catch(err){
        console.log(err)
    }

}

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function(val){
//         console.log(val);
//     })

//     .catch(function(err){
//         console.log(err);
//     })