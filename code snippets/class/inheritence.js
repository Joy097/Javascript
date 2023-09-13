class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    race(){     // this is method not function
        console.log(this.name+' is racing');
    }
}

class Engine extends Car{
    constructor(name, year, ename, eyear){
        super(name, year);
        this.ename = ename;
        this.eyear = eyear;
    }
    show(){ 
        console.log("here is the engine!");
    }
}
const engine = new Engine('ford','2011','volvo', '2009');
console.log(engine.name);