
// Type Inference in typescript
// automatically write by typescript

// when we write explicitly
// then it is type anotations


// ✅ Question 1
// 👉 Declare a variable message and initialize it with

// "Hello, TypeScript!"
// Infer the type using type inference.

// 🔹 Solution (Using Type Inference)
// Type Inference Example

let message = "Hello, TypeScript!";

// TypeScript automatically infers:
// message: string

console.log(message);

// 🔎 What Happened?
// Because you assigned a string value, TypeScript automatically infers:
// let message: string

// You did NOT explicitly write : string,
// but TypeScript understood it automatically.
// That is Type Inference.

// ✅ Question 2
// 👉 Write a function calculateArea
// Takes length and width (number type)
// Returns their product
// Infer the return type using type inference

// 🔹 Solution 1 (Using Type Inference for Return Type)

function calculateArea1(length: number, width: number) {
  return length * width;
}

const area1 = calculateArea1(10, 5);
console.log(area1);

// 🔎 What TypeScript Infers
// TypeScript automatically infers:

// function calculateArea(length: number, width: number): number
// Because:
// return length * width;


// Multiplying two numbers returns a number → so return type = number.
// You did NOT explicitly write : number.
// That is return type inference.
// 🔹 Solution 2 (Best Practice Version – Industry Style)
// In real projects, especially large applications, we usually write the return type explicitly:

function calculateArea2(length: number, width: number): number {
  return length * width;
}

const area2 = calculateArea2(12, 4);
console.log(area2);

// ✅ Why?
// Because:
// Makes code more readable
// Helps avoid accidental return type changes
// Better for team collaboration

