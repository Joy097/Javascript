var firstObject = {
    "name": "joy",
    "legs":2,
    "mood": "angry",
    "friends":["abir","ovi","fahim","tanvir"]
}

console.log(firstObject['friends'][3]);
firstObject.name="javed";
//console.log(firstObject);

function addNewProperty(a,b){
    firstObject[a]=b
}

addNewProperty("work","bekar");
console.log(firstObject);

function deleteProperty(x){
    delete firstObject[x];}

deleteProperty("work");
console.log(firstObject);

