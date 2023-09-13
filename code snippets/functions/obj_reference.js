// when an object is passed to a function, the reference is passed
// not just the value. It is like the pointer in memory.

function learn(a){
    a.one = a.two*7
    return a.one
}

obj = {
    one:46,
    two:4
}
console.log(learn(obj)); //28
console.log(obj.one); //28
// so, the actual value is changed
