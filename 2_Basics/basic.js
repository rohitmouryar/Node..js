// Variables in JavaScript
var a = 10;
let b = 20;
const c = 30;
console.log(a + b + c); 

// Conditions (if-else)
let a = 200;
if (a == 200) {
  console.log("This is if condition");
} else {
  console.log("This is else condition");
}


// Functions
function fruit(item) {
  return "This is " + item;
}

console.log(fruit("Apple"));


// Loops  For Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// While Loop
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

// Arrays

let users = ["Anil", "Sam", "Peter", "Bruce"];
console.log(users[0]); // Anil

// 🔹 Loop through Array
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}


// Object
let user = {
  name: "Anil",
  city: "Delhi",
  age: 29
};

console.log(user.name);
console.log(user.age);


// Module
const data = require("./data");
console.log(data.username);

// second method
const { username } = require("./data");
console.log(username);