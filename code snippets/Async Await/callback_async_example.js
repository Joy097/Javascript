//Asynchronous callback
const give_cv = true;
const mark = 80;
// ***** You cant use setTimeout(callback(),1000) 
//  or written exam(viva()). You have to use setTimeout(callback,1000) 
//  or written exam(viva) or written_exam(function(){}) *****

function written_exam(callback) {
    console.log('CV review in progress');
    setTimeout(function(){
        if(give_cv) {
            callback()
        }
        else {
            console.log('Please submit the CV')
        }
    },2000)

}

function viva(callback) {
    console.log('mark review in progress');
    setTimeout(function(){
        if(mark>=80) {
            callback();
        }
        else {
            console.log('The mark is not satisfactory')
        }
    },1000);
}

function Job() {
    console.log('You got the job!!')
}

written_exam(function(){
    viva(Job)
})

