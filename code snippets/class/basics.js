class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    race(){     // this is method not function
        console.log(this.name+' is racing');
    }
}

const car1 = new Car('BMW',2007);
console.log(car1.name);
car1.race();