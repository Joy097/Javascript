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
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    show(){ 
        console.log("here is the engine!");
    }
}