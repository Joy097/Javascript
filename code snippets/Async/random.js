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
    })
}

function progress(callback){
    console.log("Conducting the course...")
    setTimeout(function(){
        if (marks>=80) {
            console.log("Conductii")
            callback();
        }

        else {
            console.log("Please clear the payment!")
        }
    })
}

function getCertificate(callback){
    console.log("Congrats! here is your certificate")
}
