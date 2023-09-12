const person = {
    name: 'John',
    age: 34,
    getName: function(){
        return this.name
    }
}

document.getElementById('demo').innerHTML = JSON.stringify(person);