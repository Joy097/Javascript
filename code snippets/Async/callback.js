// callback is a function that can be passed as a 
// parameter inside another function.

function display(value){
    console.log(value);
}

function calculate(num1, num2, callback){
    let sum = num1 + num2
    callback(sum)
}

calculate(3, 8, display)

// here display function is passed as a parameter
// So, we can control whether we want to use display or not

// In other words:

function calculate(num1, num2, callback){
    let sum = num1 + num2
    callback(sum)
}

calculate(3, 8, function(value){
    console.log(value)
})