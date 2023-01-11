//Math.floor to round a number
//Math.random to a random number
//Math.random*10 means a random number between 0 and 10 but not 10

//random number between 0 to a number

function randomizer(number){
    return Math.floor(Math.random()*number);
}
console.log(randomizer(30));
