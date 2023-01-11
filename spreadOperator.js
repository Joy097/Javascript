// normally :
const arr1 = ['jan','feb','mar','apr','may']
let arr2;
(function(){
    arr2 = arr1;
    arr1[0] = 'potato'
}) ();
console.log(arr2)

//after spreading:
const ary1 = ['jan','feb','mar','apr','may']
let ary2;
(function(){
    ary2 = [...ary1];
    ary1[0] = 'potato'
}) ();
console.log(ary2)