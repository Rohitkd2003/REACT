
// ✅ Program 1: Sum of array
// JavaScript
const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};
console.log("Sum:", sum([1, 2, 3, 4]));


// TypeScript (Commented out as this is a .js file)
/*
const sumTS = (arr: number[]): number => {
  return arr.reduce((a, b) => a + b, 0);
};
*/

// ✅ Program 2: User object
// JavaScript
const user = {
  name: "Rohit",
  age: 21
};


// TypeScript (Commented out as this is a .js file)
/*
type User = {
  name: string;
  age: number;
};

const userTS: User = {
  name: "Rohit",
  age: 21
};
*/


// ✅ Program 3: Function with optional param
// JavaScript
const greet = (name, age) => {
  return `Hello ${name}`;
};


// TypeScript (Commented out as this is a .js file)
/*
const greetTS = (name: string, age?: number): string => {
  return `Hello ${name}`;
};
*/



// ✅ Program 4: Union type example
// JavaScript
const printValue = (val) => {
  console.log(val);
};


/*
const printValueTS = (val: number | string): void => {
  console.log(val);
};
*/

// Quick demo when running this file directly
if (require.main === module) {
  
  console.log("User:", user);
  console.log("Greet:", greet("Rohit"));
  printValue("Union example");
}

