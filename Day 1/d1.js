// JavaScript ES6:

// let
let age = 22;
age = 23;

console.log("Age:", age);




// const
const personName = "Rohit";
//personName = "Ram"; 
console.log("Name:", personName);



// Arrow Functions (=>)


// Normal Function   
function addNumbers(a, b) {
  return a + b;
}

// Short Arrow Function
const add = (a, b) => a + b;
console.log("Add Result (named function):", addNumbers(5, 3));
console.log("Add Result (arrow):", add(5, 3));



// Destructuring
const user = {
  name: "Rohit",
  age: 22,
  city: "Pune"
};

const { name: userName, age: userAge } = user;

console.log("User Name:", userName);
console.log("User Age:", userAge);


// Array Destructuring
const colors = ["red", "blue", "green"];

const [first, second] = colors;

console.log("First Color:", first);
console.log("Second Color:", second);



// Spread (...) 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

// Rest
const userObj = { name: "Rohit" };
const newUser = { ...userObj, age: 22 };

console.log("Old User:", userObj);
console.log("New User:", newUser);


const a = [1, 2];
const b = [...a, 3, 4];

function kk(...jj) {
  return jj.reduce((x, y) => x + y);
}

console.log("Array b:", b);
console.log("Sum using kk:", kk(...b));


// map()
const numbersForSquares = [1, 2, 3, 4];
const squares = numbersForSquares.map(num => num * num);

console.log("Squares:", squares);


// filter()
const numbersForEvenFilter = [1, 2, 3, 4, 5];

const evenNumbers = numbersForEvenFilter.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


// reduce()
const numbersForSum = [1, 2, 3, 4];

const sum = numbersForSum.reduce((total, num) => {
  return total + num;
}, 0);

console.log("Sum:", sum);
