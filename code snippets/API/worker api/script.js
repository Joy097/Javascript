let w;
function startWorker(){
    if(typeof Worker !== 'undefined'){
        if (typeof w == "undefined"){
            w = new Worker("worker.js");
        }

    w.onmessage = function(event){
        document.getElementById("demo").innerHTML = event.data;
    }
    }else{
        alert('Your website does not support worker!')
    }
}

function stopWorker(){
    if(typeof Worker !== 'undefined'){
        w.terminate();
        w=undefined;
    }
    else{
        alert('Your website does not support worker!')
    }
}