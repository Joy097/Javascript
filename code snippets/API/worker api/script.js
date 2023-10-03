let w;
function startWorker(){
    if(typeof Worker !== 'undefined'){
        if (typeof w == "undefined"){
            w = new Worker("worker.js");
        }
    }else{
        alert('Your website does not support worker!')
    }
}