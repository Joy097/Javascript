var collection = {
    "3463":{
        "name":"shihab",
        "present":true,
        "work":"4 projects",
        "projects":['pro1', 'pro2','pro6','pro7'],
        "married":true
    },
    "0736":{
        "name":"joy",
        "present":false,
        'nothing':'',
        "work":"3 projects",
        "projects":['pro7', 'pro1','pro8'],
        "married":false
    },
    "9937":{
        "name":"rumee",
        "present":true,
        "work":"2 projects",
        "projects":['pro1', 'pro9'],
        "married":[]
    }
}
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateCollection(id,prop,value) {
    if(value===''){
        delete collection[id][prop]; //to delete a property
    }
    else if (prop ==="projects"){
        collection[id][prop]= collection[id][prop] || [];
        collection[id][prop].push(value); //when property is array, push it
    }
    else {
        collection[id][prop] = value; //normally update
    }
    return collection;
}
console.log(updateCollection("0736", "projects", "pro5"));
