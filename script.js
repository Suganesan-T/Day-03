//Answer for question no.1
let object1 = {name: "john doe",age: 5};
let object2 = {age: 5,name: "john doe"};
console.log(JSON.stringify(object1) === JSON.stringify(object2))