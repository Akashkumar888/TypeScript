
const person : {
  name:string;
  age:number;
  gender:string;
  isStudent:boolean;
  address:{
    city:string;
    country:string;
  }

}={
  name:"Akash kumar",
  age:20,
  gender: "Male",
  isStudent:true,
  address:{
    city:"Pune",
    country:"India"
  }
};


console.log(person.name);

console.log(person.address.city);
person.address.city="Bhagalpur";
console.log(person.address.city);

// ✅ 1️⃣ When DEFINING a TYPE → Use ;
// This part:
// This is a type structure (shape).
// Here you are describing:
// What properties should exist and what type they must have.
// So inside type definition:
// ✔ We separate properties using ;
// ✔ It behaves like an interface/type declaration
// Think of it like:
// “This object MUST follow this structure.”


// ✅ 2️⃣ When WRITING REAL OBJECT VALUES → Use ,
// This part:
// This is real JavaScript object syntax.
// In JavaScript objects:
// ✔ Properties are separated by commas ,
// ✔ Because this is actual data


// 💡 Cleaner & Professional Way (Better Practice)

// Instead of writing inline type, use a type or interface.

// ✅ Using type
// type Person = {
//   name: string;
//   age: number;
//   gender: string;
//   isStudent: boolean;
//   address: {
//     city: string;
//     country: string;
//   };
// };

// const person: Person = {
//   name: "Akash kumar",
//   age: 20,
//   gender: "M",
//   isStudent: true,
//   address: {
//     city: "Pune",
//     country: "India"
//   }
// };

// ✅ Using interface (Most Common in Interviews)
// interface Person {
//   name: string;
//   age: number;
//   gender: string;
//   isStudent: boolean;
//   address: {
//     city: string;
//     country: string;
//   };
// }

// 🏆 Interview-Level Explanation
// If interviewer asks:
// Why do we use ; in type and , in object?
// Answer:
// Because type definitions describe structure and use TypeScript syntax, while object literals follow JavaScript syntax, which uses commas to separate properties.

// ✅ Solution (Proper TypeScript Way)
// 🔹 Using type

// type Product = {
//   name: string;
//   price: number;
//   quantity: number;
// };

// const product: Product = {
//   name: "Laptop",
//   price: 1000,
//   quantity: 5
// };

// console.log(product);


// ✅ Using interface (More Common in Real Projects)

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const product: Product = {
  name: "Laptop",
  price: 1000,
  quantity: 5
};

console.log(product);

console.log(product.name);      // Laptop
console.log(product.price);     // 1000

product.quantity = 10;
console.log(product.quantity);  // 10




// 🔥 Why Do We Use type and interface?
// In TypeScript, we use them to:

// ✅ Define the shape (structure) of data
// ✅ Improve readability
// ✅ Avoid repeating types
// ✅ Enable type safety
// ✅ Make large apps maintainable
// Without them, your code becomes messy in big projects.
// 🚀 2️⃣ Are type and interface Used Only for Objects?
// ❌ NO.
// This is very important.

// ✅ interface → Mostly Used For Objects
// Used for:
// Objects
// Class structure
// API response shapes


// ✅ type → Can Be Used Anywhere
// This is the BIG difference.

// 🔹 1. Object
// type User = {
//   name: string;
// };

// 🔹 2. Union Types
// type Status = "success" | "error" | "loading";

// 🔹 3. Function Types
// type Add = (a: number, b: number) => number;

// const sum: Add = (x, y) => x + y;
// 🔹 4. Primitive Alias
// type ID = number;

// 🔹 5. Tuple
// type Coordinates = [number, number];