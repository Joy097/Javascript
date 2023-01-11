const arr = [1,2,3,4,5,6,7];

function removeFirstTwo(list){
    const [, , ...arr1] = list;
    return arr1;
}

const arr2 = removeFirstTwo(arr);
console.log(arr2)
console.log(arr)
module.exports = removeFirstTwo