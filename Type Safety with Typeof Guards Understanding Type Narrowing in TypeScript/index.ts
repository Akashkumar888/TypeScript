
const favHobbies=(hobby:string | string[])=>{
  if(typeof hobby==='object' && Array.isArray(hobby)){
    return hobby.map(()=>{});
  }
  else{
    console.log(hobby);
  }
}


favHobbies("Akash");
favHobbies(['coding','games']);

// 1️⃣ What is Type Narrowing?
// In TypeScript, sometimes a variable can hold multiple types.
// Example:
// string | string[]
// This is called a Union Type.
// But when you want to use the variable, TypeScript must know exactly which type it is at runtime.
// To do that we use Type Guards.
// Type Guards help TypeScript narrow the type.

// 2️⃣ Your Function
// Your code:
// const favHobbies = (hobby: string | string[]) => {
//   if (typeof hobby === 'object' && Array.isArray(hobby)) {
//     return hobby.map(() => {});
//   }
//   else {
//     console.log(hobby);
//   }
// }
// Function accepts:
// string
// OR
// string[]
// So TypeScript must determine which one it is.

// 3️⃣ First Type Guard → typeof
// You used:
// typeof hobby === "object"
// Important concept:
// Value	typeof result
// string	"string"
// number	"number"
// boolean	"boolean"
// array	"object"
// object	"object"
// Arrays return object.
// So this condition is not enough.

// 4️⃣ Second Type Guard → Array.isArray()
// To confirm it is an array we use:
// Array.isArray(hobby)
// This checks if the value is truly an array.
// Example:
// Array.isArray("Akash")      // false
// Array.isArray(["coding"])   // true
// So your condition becomes:
// typeof hobby === "object" && Array.isArray(hobby)
// But actually this is redundant.
// Because Array.isArray() alone is enough.

// 5️⃣ Cleaner Industry Version
// const favHobbies = (hobby: string | string[]) => {
//   if (Array.isArray(hobby)) {
//     hobby.map((h) => console.log(h));
//   } 
//   else {
//     console.log(hobby);
//   }
// }
// 6️⃣ Function Execution
// Call 1:
// favHobbies("Akash");
// TypeScript narrows:
// hobby = string
// Output:
// Akash
// Call 2:
// favHobbies(["coding", "games"]);
// TypeScript narrows:
// hobby = string[]
// Output:
// coding
// games

// 7️⃣ Why Type Narrowing Is Needed
// Without narrowing:
// hobby.map()
// TypeScript error:
// Property 'map' does not exist on type 'string | string[]'
// Because string does not have map().
// So we must first check type.

// 8️⃣ Types of Type Guards (Interview Question)
// TypeScript has 4 main type guards.

// 1️⃣ typeof guard
// Used for primitive types.
// Example:
// if (typeof value === "string") {
// }
// Used for:
// string
// number
// boolean
// bigint
// symbol
// undefined
// function

// 2️⃣ instanceof guard
// Used for class objects.
// Example:
// if (car instanceof Car) {
// }

// 3️⃣ Array.isArray()
// Used for arrays.
// Example:
// if (Array.isArray(data)) {
// }

// 4️⃣ Custom Type Guard
// Example:
// function isString(value: any): value is string {
//   return typeof value === "string";
// }

// 9️⃣ Advanced Example (Interview Level)
// function printData(data: string | number) {
//   if (typeof data === "string") {
//     console.log(data.toUpperCase());
//   } 
//   else {
//     console.log(data.toFixed(2));
//   }
// }
// TypeScript automatically narrows.

// 🔟 Real Industry Example
// API responses often return multiple types.
// Example:
// type ApiResponse = string | string[];
// Handling it safely:
// function handleResponse(res: ApiResponse) {
//   if (Array.isArray(res)) {
//     res.forEach(item => console.log(item));
//   }
//   else {
//     console.log(res);
//   }
// }

// 1️⃣1️⃣ Best Interview Answer
// If interviewer asks:
// What is Type Narrowing in TypeScript?
// Answer:
// Type narrowing is the process of refining a variable’s type within a conditional block so TypeScript can safely perform operations specific to that type. It is commonly done using type guards like typeof, instanceof, and Array.isArray().
// 1️⃣2️⃣ Small Improvement in Your Code
// Your code:
// hobby.map(()=>{})
// Better version:
// hobby.map((h) => console.log(h));
// 1️⃣3️⃣ Final Clean Version
// const favHobbies = (hobby: string | string[]) => {
//   if (Array.isArray(hobby)) {
//     hobby.map((h) => {
//       console.log("Hobby:", h);
//     });
//   } 
//   else {
//     console.log("Hobby:", hobby);
//   }
// };

// favHobbies("Akash");
// favHobbies(["coding", "games"]);
// 🧠 Interview Tip

// Type narrowing is extremely common in TypeScript interviews.
// They may ask:

// string | number
// string | string[]
// User | Admin
// API success | API error
// You must narrow the type before using it.

