const fruits = new Map([
    ['apples',500],
    ['banana',200],
    ['pepperoni',300]
]);

fruits.set('grape',600);
fruits.set(67,600); //map's key can be numbers
//maps elements can be in any order 
fruits.get('grape');