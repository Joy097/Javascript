function Person(first, last, age, status){
    this.first = first;
    this.last = last;
    this.age = age;
    this.status = status;
    this.fullName = function(){
        return this.first + ' ' + this.last
    }
}

const joy = new Person('Joy', 'chowdhury', 24,'Intern');

console.log(joy.fullName)