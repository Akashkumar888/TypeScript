
console.log("Hello...");


// let firstName:string;
// firstName="Akash"

// let age:Number;
// age=21;

// const person:object={
//   firstName:"Patel",
//   age:22,
// } yaha object kuch bhi type ka ho skta hai that's why it is not use

// const person:{
//   firstName:string,
//   age:Number,
// }={
//   firstName:"Patel",
//   age:22,
// } 



// union -> pipe |
// leteral types
// type alias surtom types

// Union -> pipe |
// Literal types
// Type alias custom types

// Type alias for clarity
type Combinable = number | string;

function combine(num1: Combinable, num2: Combinable): Combinable {
  let result: Combinable;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

// Example usage with explicit type narrowing
const sumOfTwoNumbers = combine(10, 20);
if (typeof sumOfTwoNumbers === "number") {
  console.log("Sum:", sumOfTwoNumbers); // ✅ Safe
}

const concatOfTwoString = combine("Akash", "Kumar");
if (typeof concatOfTwoString === "string") {
  console.log("Concatenation:", concatOfTwoString); // ✅ Safe
}


