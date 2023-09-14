const status = true;

console.log("task 1");

const promise = new Promise(function(resolver, rejecter){
    setTimeout(function(){
        if(status){
            resolver("task 2");
        }
        else{
            rejecter("Cant complete the task");
        }
    },2000);
})

promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.error(err);
    })

console.log("task 3");


