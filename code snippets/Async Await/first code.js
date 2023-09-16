// setTimeout is a asynchronous function but all other
// functions are synchronous. This is used to skip a function
// and execute it later.

// setInterval is same but prints unlimited values

console.log("line 1");

setTimeout(function() {
    console.log("line 2");
},100);

setInterval(function() {
    console.log("line 3");
},100);

console.log("line 4");