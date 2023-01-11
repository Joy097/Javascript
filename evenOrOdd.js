//Find even or Odd using remainder operator
const prompt = require("prompt-sync")({ sigint: true });
var a = prompt("enter a number : ");

if (a%2 == 0) {
    console.log("Even");}
    else {
        console.log("Odd");
    }
