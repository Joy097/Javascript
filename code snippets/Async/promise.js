const status = true;

console.log("task 1");

const promise = new Promise((resolver, rejecter)=>
    setTimeout(function(){
        if(status){
            resolver("task 2");
        }
        else{
            rejecter("Cant complete the task");
        }
    }),2000)

