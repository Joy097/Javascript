// js is based on prototype
// we can not add something inside the Person but 
// can add inside the object prototype

function Person(first, last, age, status){
    this.first = first;
    this.last = last;
    this.age = age;
    this.status = status;
    this.fullName = function(){
        return this.first + ' ' + this.last
    }
}
Person.prototype.country = 'Bangladesh'

const joy = new Person('Joy', 'chowdhury', 24,'Intern');
const jaber = new Person('Jaber', 'chakma', 42,'Intern');
const jaker = new Person('Joy', 'chowdhury', 24,'Intern');

console.log(joy.country)