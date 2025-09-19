
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
// type alias custom types

//! Union -> pipe |
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



//! Literal types | custom type use here 
// function akash(num1: number|string, num2: number|string,conversionType:"as-number" | "as-string"){
//   let ans;
//   if(conversionType==='as-number' || (typeof num1 === "number" && typeof num2==="number")){
//     ans= +num1 + +num2;
//   }
//   else{
//     ans=num1.toString()+num2.toString();
//   }
//   return ans;
// }

// const sum1=akash(20,30,"as-number");
// const sum2=akash("50","40","as-number");

// const combineName=akash("Akash","kumar","as-string");

// console.log(sum1,sum2,combineName);


// types alias / custom types

type combinable=number |string | boolean | string[];
type ConversionType="as-number" | "as-string";
function akash(num1: combinable, num2: combinable,conversionType:ConversionType){
  let ans;
  if(conversionType==='as-number' || (typeof num1 === "number" && typeof num2==="number")){
    ans= +num1 + +num2;
  }
  else{
    ans=num1.toString()+num2.toString();
  }
  return ans;
}

const sum1=akash(20,30,"as-number");
const sum2=akash("50","40","as-number");

const combineName=akash("Akash","kumar","as-string");

console.log(sum1,sum2,combineName);




// practice type in object
// const user:{
//   name:string,
//   age:number,
// }={
//   name:"Akash",
//   age:22,
// }


type ObjectType={
 name:string,
 age:number,
 skills:string[],
};

// type → often used for aliases, unions, intersections.
// interface → often used when designing shapes of objects, especially in OOP style or extending multiple interfaces.

// interface ObjectType {
//  name:string,
//  age:number,
//  skills:string[],
// };


const user : ObjectType ={
  name:"Akash",
  age:22,
  skills:["Python","cpp","JavaScript","Reactjs"],
}

console.log(user);


function greet(user:ObjectType){
  console.log(`Hii, I am ${user.name}`);
}

greet(user);
