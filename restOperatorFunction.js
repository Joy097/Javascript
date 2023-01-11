//normal operator function :
const sum = (function(){
    return function sum(x,y,z){
        const args = [x,y,z];
        return args.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,2,3))

//using rest operator :
const sum1 = (function(){
    return function summation(...args){
        return args.reduce((a,b) => a+b,0);
    };
})();
console.log(sum1(1,2,3,6,7))