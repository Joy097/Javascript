function randomInRange(min, max) {
    return Math.floor(Math.random()*(max-min+1) + min);
}
console.log(randomInRange(12,40))