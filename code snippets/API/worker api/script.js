let w;
function startWorker(){
    if(typeof Worker !== 'undefined'){
        w = new Worker("worker.js")
    }else{
        alert('Your website does not support worker!')
    }
}