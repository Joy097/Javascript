//this is a anonymous function 1
// Cause it do not have any name
var magic = function(){
    return new Date();
}

//shortening that function gives :
var magic = () => new Date()

// another anonymous function 2
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(myConcat([1,2],[3,4,5]))

//shortening :
var myCon = (arr1, arr2) => arr1.concat(arr2);

console.log(myCon([0,1,2],[3,4,5]))