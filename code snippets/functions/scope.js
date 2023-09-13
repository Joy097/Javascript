// closure is about global and local variable

let counter = 0; //global variable

let result = () => {
    let counter = 0;
    let a = 7;   //local variable
    counter += a;  
    return counter 
}

let e = result();

console.log(e);
console.log(counter)