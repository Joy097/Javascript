const person = {
    name: 'John',
    age: 34,
    getName: function(){
        return this.name
    }
}

console.log(person.getName());