//have to call the inner function using closure

function temporary() {
    let counter = 0;

    return function () {
        counter += 1;
    }
  }

const add = temporary(); //so, now add is a function

add();
