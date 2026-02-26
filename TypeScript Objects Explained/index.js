"use strict";
const person = {
    name: "Akash kumar",
    age: 20,
    gender: "Male",
    isStudent: true,
    address: {
        city: "Pune",
        country: "India"
    }
};
console.log(person.name);
console.log(person.address.city);
person.address.city = "Bhagalpur";
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


