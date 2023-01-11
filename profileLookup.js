var contacts = [{
    "name": "Alice",
    "number":"0197634596",
    "likes":["pizza", "apple","coding"]
},
{
    "name": "Bob",
    "number":"0173095596",
    "likes":["doe", "cycling","cake"]
},
{
    "name": "Joe",
    "number":"0177777796",
    "likes":["chicken", "gaming","pepsi"]
},
{
    "name": "Ryan",
    "number":"0190987656",
    "likes":["coke", "egg","running"]
},
{
    "name": "David",
    "number":"0191234566",
    "likes":["riding", "cat","dog"]
}];

function lookupProfile(name,property){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i]["name"]==name){
            return contacts[i][property];
            break;
        }
        
    }
    return "no such property for "+name;
}
console.log(lookupProfile("David","number"));
