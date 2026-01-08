export {};

// Interfaces
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

// Interface usage example
{
  const admin: Admin = { name: "Admin One", age: 30, role: "superuser" };
  console.log("Admin", admin);
}

// Type
// Distinct request status union (kept separate from enum below)
type RequestStatus = "loading" | "success" | "error";

// Union usage example
{
  const currentRequest: RequestStatus = "success";
  console.log("Request status", currentRequest);
}




// Generics
const printValue = <T>(value: T): T => {
  return value;
};

console.log("Print number", printValue<number>(10));
console.log("Print string", printValue<string>("Hello"));

// Enums (rewritten as const objects so they run directly with node)
const ApiStatus = {
  Loading: "Loading",
  Success: "Success",
  Error: "Error"
} as const;
type ApiStatus = (typeof ApiStatus)[keyof typeof ApiStatus];

// Enum usage example
{
  const apiStatus: ApiStatus = ApiStatus.Success;
  console.log("API status", apiStatus);
}

// String Enum (const object style)
const Role = {
  Admin: "ADMIN",
  User: "USER"
} as const;
type Role = (typeof Role)[keyof typeof Role];

// String enum usage example
{
  const role: Role = Role.Admin;
  console.log("Role", role);
}

// Utility Types
interface User {
  name: string;
  age: number;
}

// Partial
const updateUser = (user: Partial<User>) => {
  console.log("Partial output:", user);
};

// Pick
type UserName = Pick<User, "name">;

// Omit
type UserWithoutAge = Omit<User, "age">;

// Readonly
const readonlyUser: Readonly<User> = {
  name: "Rohit",
  age: 21
};

// 🔹 All calls in one place
const userName: UserName = { name: "Rohit" };
const userWithoutAge: UserWithoutAge = { name: "Only Name" };

updateUser({ name: "Updated Rohit" });
updateUser({ age: 22 });

console.log("Pick output:", userName);
console.log("Omit output:", userWithoutAge);
console.log("Readonly output:", readonlyUser);

// ❌ error (Readonly)
// readonlyUser.age = 23;
