const incr = (function(){
    return function incr(num, val = 1){
        return num+val;
    };
})();
console.log(incr(3,5))
console.log(incr(3))