// js can iterate array cause there is a symbol.iterator in array
// but can not iterate through object because object do not have them

const nums = [1,2,3];
const iterator = nums[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//make an object iterable:
const numbers = {
    one:1,
    two:2,
    three:3
}

