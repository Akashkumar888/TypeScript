// 🟢 1️⃣ Primitive Types (Basic Types)
// ✅ 1. number
let age: number = 22;
let price: number = 99.99;


// ✔ Used for integers + decimals
// ✔ JS only has number (no int/float separate)

// ✅ 2. string
let name: string = "Akash";
let message: string = `Hello ${name}`;


// ✔ Supports template literals

// ✅ 3. boolean
let isLoggedIn: boolean = true;

// ✅ 4. undefined
let data: undefined = undefined;


// Rarely used directly.

// ✅ 5. null
let value: null = null;


// With strict mode, null must be defined explicitly.
// 🟢 2️⃣ Special Types (Very Important)

// ✅ 6. any ⚠️ (Avoid in Industry)
let data: any = 10;
data = "Akash";
data = true;


// ✔ Turns off type checking
// ❌ Dangerous in large apps
// Interview Question:
// 👉 Difference between any and unknown?

// ✅ 7. unknown (Safer than any)
let value: unknown = "Akash";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


// ✔ Must check type before using
// ✔ Used in real backend APIs

// ✅ 8. void
// Used in functions that return nothing.

function print(): void {
  console.log("Hello");
}

// ✅ 9. never (Very Important 🔥)
// Used when function NEVER returns.

function throwError(): never {
  throw new Error("Something went wrong");
}


// ✔ Infinite loop or error throwing
// ✔ Used in advanced types
// 🟢 3️⃣ Complex Types
// ✅ 10. Array

let numbers: number[] = [1, 2, 3];

let names: Array<string> = ["Akash", "Rahul"];

// ✅ 11. Tuple
// Fixed-length array

let user1: [string, number] = ["Akash", 22];

// ✅ 12. Enum
enum Role {
  Admin,
  User,
  Guest
}

let myRole: Role = Role.Admin;


// ✔ Used in backend systems

// 🟢 4️⃣ Object Types
// ✅ Object with Type
let user2: { name: string; age: number } = {
  name: "Akash",
  age: 22
};

// ✅ Type Alias
type User = {
  name: string;
  age: number;
};

let u1: User = {
  name: "Akash",
  age: 22
};

// ✅ Interface (Most Important 🔥)

interface Product {
  id: number;
  name: string;
}

let p1: Product = {
  id: 1,
  name: "Laptop"
};


// ✔ Preferred in industry
// ✔ Can extend

// 🟢 5️⃣ Union & Intersection
// ✅ Union Type
let id: number | string;

id = 10;
id = "A101";


// ✅ Intersection Type
type A = { name: string };
type B = { age: number };

type C = A & B;

let person: C = {
  name: "Akash",
  age: 22
};


// 🟢 6️⃣ Functions in TypeScript
// Now your main question 👇

// ✅ 1️⃣ Simple Function (Normal Function)
// 🔹 Syntax
function add(a: number, b: number): number {
  return a + b;
}

// Optional Parameter
function greet(name: string, age?: number): string {
  return `Hello ${name}`;
}

// Default Parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// ✅ 2️⃣ Fat Arrow Function (Arrow Function)
// 🔹 Basic Arrow Function
const add1 = (a: number, b: number): number => {
  return a + b;
};

// 🔹 Short Form
const add2 = (a: number, b: number): number => a + b;

// 🟢 7️⃣ Function Type Definition
// You can define function type separately.

type AddFunction = (a: number, b: number) => number;

const add3: AddFunction = (x, y) => x + y;


// 🔥 Used in React props & callbacks.

// 🟢 8️⃣ Function Returning void
const printMessage = (msg: string): void => {
  console.log(msg);
};

// 🟢 9️⃣ Function Returning never
const throwError = (): never => {
  throw new Error("Crash!");
};

// 🟢 🔟 Generic Function (Advanced)
function identity<T>(value: T): T {
  return value;
}


// Usage:
// identity<string>("Akash");
// identity<number>(10);