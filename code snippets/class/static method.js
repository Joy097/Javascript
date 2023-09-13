// static methods can only be called by the class name
// so, static is used when we need to use a function
// without calling the through an object

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
const myCar = new Car("Ford");
console.log(Car.hello(myCar));
  