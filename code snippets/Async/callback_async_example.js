const give_cv = true;
const mark = 80;

function written_exam(callback) {
    console.log('CV review in progress');
    setTimeout(function(){
        if(give_cv) callback()

    },2000)

}

function viva(callback) {
    console.log('mark review in progress');
    if (mark>=80) setTimeout(
        callback(),1000)

    else console.log('The mark is not satisfactory')
}

function Job() {
    console.log('You got the job!!')
}

written_exam(function(){
    viva(Job)
})
