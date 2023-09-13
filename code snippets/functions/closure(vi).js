//have to call the inner function using closure

function temporary() {
    let counter = 0;

    return function () {
        counter += 1;
    }
  }
  

const add = temporary(); //so, now add is a function

console.dir(add) //Closure is counter = 2, as add() is called twice
add();
add();

// So, closure is a function, having access to the parent scope
// evem after the parent function has closed. Here, the
// counter in temporary is kept in a location to use later
// and in this way, user can access a variable of that scope
// outside the scope using closure.