class Car{
    constructor(name, year){
        this._name = name;
        this.year = year;
    }

    race(){     // this is method not function
        console.log(this.name+' is racing');
    }

    get name(){
        return this._name;
    }

    set name(nm){
        this._name = nm;
    }
}

let myCar = new Car();
myCar.name = 'Fiesta'
document.getElementById("car").innerHTML = myCar.name;