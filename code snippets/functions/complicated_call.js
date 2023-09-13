const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
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

  // This will return "Mary Doe":
console.log(person.fullName.call(person1)); //here, this is person1