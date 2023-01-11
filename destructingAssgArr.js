//ex - 1 :
const [x,y, ,z,,,m] = [1,2,3,4,5,6,7];
console.log(x,y,z,m)

//ex - 2 :
let a=2, b=5;
(()=>{
    [a,b] = [b,a]
})();
console.log(a);
console.log(b);