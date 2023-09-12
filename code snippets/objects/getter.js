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

person.sstat = 'jogging'

console.log(person.status)
