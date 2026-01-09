export {};

//  1. Basic type
let username: string = "Rohit";
let age: number = 21;
let isDeveloper: boolean = true;
console.log("Basic types:", username, age, isDeveloper);





//  2. Arrays & Objects



// Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Rohit", "Amit","Ram"];
console.log("Arrays:", numbers, names);

// Objects
type User = {
  name: string;
  age: number;
};

const u1: User = { name: "Rohit", age: 21 };

console.log("User object:", u1);




//  3. Union Types (|)
let id: number | string;
id = 101;
console.log("Union id as number:", id);
id = "EMP101";
console.log("Union id as string:", id);








//  4. Optional Properties (?)
type UserOptional = {
  name: string;
  age?: number; // optional
};

const user1: UserOptional = { name: "Rohit" };
console.log("Optional prop user:", user1);










// 5. Function Typing
const add = (a: number, b: number): number => {
  return a + b;
};

console.log("Add function:", add(2, 3)); // バ. correct
