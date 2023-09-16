const payment = true
const marks = 80

function enroll(callback){
    console.log("Enrolling....")
    setTimeout(function(){
        if (payment) {
            console.log("Enroll done!")
            callback();
        }

        else {
            console.log("Please clear the payment!")
        }
    },2000)
}

function progress(callback){
    console.log("Conducting the course...")
    setTimeout(function(){
        if (marks>=80) {
            console.log("Completed the course!")
            callback();
        }

        else {
            console.log("Please clear the payment!")
        }
    },3000)
}

function getCertificate(){
    console.log("Congrats! here is your certificate")
}

enroll(function(){
    progress(getCertificate);
})
