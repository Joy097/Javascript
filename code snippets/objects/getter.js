const person = {
    name: 'John',
    age: 34,
    status: 'active',
    get gstat(){
        return this.status
    },
    set sstat(val){
        this.status = val
    }
}

Object.defineProperty(person, "getName",{
    get: function(){
        return this.name;
    }
});


person.sstat = 'jogging'

console.log(person.getName)
