const realArray = [4, 4.5, -6.7, 3.83, 32, 6, 5.3, -1];

const squareList = (arr) =>{
const sqrInt = arr.filter(num => Number.isInteger(num) && num>0).map(x=>x*x);
return sqrInt;};

const sqrInt = squareList(realArray);
console.log(sqrInt)