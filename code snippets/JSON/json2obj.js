const jsonString = '{"name":"John","age":30,"city":"Dhaka"}'

console.log(jsonString) // unusable

const myObj = JSON.parse(jsonString)

console.log(myObj)  // unusable 