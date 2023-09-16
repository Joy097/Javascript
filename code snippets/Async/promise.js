console.log("task 1")

const execute = false;
const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        if(execute) {
            resolve("task 2")
        }
        else{
            reject("can't execute task")
        }
    },3000)
})

promise
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err)
    })

console.log("task 3")