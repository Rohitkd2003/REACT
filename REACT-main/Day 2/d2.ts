
// ✅ Program 1: Sum of array


// JavaScript
// const sum = (arr) => {
//   return arr.reduce((a, b) => a + b, 0);
// };


 //TypeScript 

const sumTS = (arr: number[]): number => {
  return arr.reduce((a, b) => a + b, 0);
};


// ✅ Program 2: User object
// JavaScript
// const user = {
//   name: "Rohit",
//   age: 21
// };
//TypeScript 
type User = {
  name: string;
  age: number;
};

const userTS: User = {
  name: "Rohit",
  age: 21
};



// ✅ Program 3: Function with optional param
// JavaScript
// const greet = (name, age) => {
//   return `Hello ${name}`;
// };
// TypeScript

const greetTS = (name: string, age?: number): string => {
  return `Hello ${name}`;
};




// ✅ Program 4: Union type example
// JavaScript
// const printValue = (val) => {
//   console.log(val);
// };
// TypeScript 
const printValueTS = (val: number | string): void => {
  console.log(val);
};


