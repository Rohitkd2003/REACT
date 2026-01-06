
// Interface
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

// Type 

type Status = "loading" | "success" | "error";

type User = {
  name: string;
  age: number;
};


//  Generics (ek example)
Problem (without generics)
const printNumber = (value: number): number => value;

Solution (generic)
const printValue = <T>(value: T): T => {
  return value;
};

printValue<number>(10);
printValue<string>("Hello");


👉 T म्हणजे placeholder type



//3️⃣ Enums
Without enum ❌
const status = "success"; // typo risk

With enum ✅
enum Status {
  Loading,
  Success,
  Error
}

let apiStatus: Status = Status.Success;

String enum (React madhe common)
enum Role {
  Admin = "ADMIN",
  User = "USER"
}



//4️⃣ Utility Types (React madhe खूप use)
Partial
interface User {
  name: string;
  age: number;
}

const updateUser = (user: Partial<User>) => {
  console.log(user);
};

Pick
type UserName = Pick<User, "name">;

Omit
type UserWithoutAge = Omit<User, "age">;

Readonly
const user: Readonly<User> = {
  name: "Rohit",
  age: 21
};

// user.age = 22 ❌ error


//5️⃣ Install Node & npm

Google → nodejs.org

Download LTS version

Install → Next Next Finish

Check:

node -v
npm -v

6️⃣ Vite + React + TypeScript Setup
npm create vite@latest my-app


Options:

Framework → React

Variant → TypeScript

Then:

cd my-app
npm install
npm run dev


Browser open:

http://localhost:5173