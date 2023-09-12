// js can iterate array cause there is a symbol.iterator in array
// but can not iterate through object because object do not have them

const nums = [1,2,3,4,5,6,7,8,9];
const iterator = nums[Symbol.iterator]();

for(let n of nums)