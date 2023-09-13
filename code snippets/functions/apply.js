const person = {
    fullName: function(city,country) {
      return this.firstName + " " + this.lastName+ " lives in " + city + ", " + country;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  const person2 = {
    firstName: "John",
    lastName: "Doe"
  }

// call and apply difference: 
// That is second argument will be array
console.log(person.fullName.apply(person1,['Dhaka','Bangladesh'])); 

//MAX: Math.max is not possible for array. so,
Math.max.apply(null,[1,2,1,8,34,5,7,23,45,56]);