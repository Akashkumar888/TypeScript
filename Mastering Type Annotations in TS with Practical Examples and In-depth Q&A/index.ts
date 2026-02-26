
let myFavNum:number =10;
let myFullName:string="Akash kumar";
let myAge:number=29;
let pi:number=3.1416;
let myNegVal:number=-5;


let computedValue:number =Math.sqrt(16);

let nanValue: number = NaN;

// 🧠 Why is NaN allowed in number?
// In JavaScript (and TypeScript):
// 👉 NaN is actually of type number.


console.log(myFavNum.toString());

let sum1=myFavNum + 10;

console.log(sum1);


let myFullNameIs="Akash kumar";
let myFirstName="Akash";
let myLastName="Kumar";


let myfullName = `${myFirstName} ${myLastName}`;
console.log(myfullName);

let message12:string="Hello, Typescript!"

console.log(message12);

let sentence:string="Please subscribe my channel";
let sentenceLength:number=sentence.length;

console.log(sentenceLength);

let text:string="Pleaese subscribe my channel"
let upperCaseText:string=text.toUpperCase();
let lowerCaseText:string=text.toLowerCase();

console.log(upperCaseText);
console.log(lowerCaseText);

// These methods return a new string.
// Original string does NOT change (strings are immutable).

let longText: string = "TypeScript is powerful and scalable";

let shortText: string = longText.substring(0, 10);

console.log(shortText);

// substring(start, end)
// start → inclusive
// end → exclusive

let str1: string = "Akash";
let str2: string = "akash";

let areEqual: boolean = str1 === str2;

console.log(areEqual); // false

// 🔥 Case-insensitive comparison

let areEqualInsensitive =
  str1.toLowerCase() === str2.toLowerCase();

let product: string = "Laptop";
let priceOfLaptop: number = 50000;

let result: string = `The product ${product} is priced at ${priceOfLaptop} dollars.`;

console.log(result);

// ✅ includes()
let text1 = "TypeScript is amazing";

console.log(text1.includes("Script")); // true

// ✅ startsWith()
text1.startsWith("Type"); // true

// ✅ endsWith()
text1.endsWith("amazing"); // true

// ✅ indexOf()
text1.indexOf("Script"); // 4

// ✅ replace()
text1.replace("amazing", "awesome");

// ✅ split()
let words = text1.split(" ");

// Returns array of strings.

// ✅ trim()
let nameOfAkash = "  Akash  ";
nameOfAkash.trim();

// Removes extra spaces.

// ✅ How To Fix (Correct Way)
// You must convert your file into a module.
// Just add this at top or bottom of file:
// export {};

// That’s it.
// Now TypeScript treats the file as a module → variables become file-scoped.
// 💡 Why This Works
// When a file contains:
// import
// or export
// TypeScript treats it as a module.
// Modules have their own scope.
// Scripts share global scope.

// 🚀 Best Fix For You
// Add at bottom of every practice file:

export {};

// ✅ Industry ALWAYS uses modules.
// ❌ Global variables are avoided.
// In real projects:
// Every file is a module
// We use import and export
// Variables are file-scoped
// No accidental global pollution
// 🚀 Industry Standard Practice
// Every file is treated as a module.
// How?
// By adding:

// export {};

// OR by actually exporting something:
// export const myFavNum = 10;
// OR importing something:
// import fs from "fs";
// If a file has import or export, it automatically becomes a module.

// OR
// Better practice:
// Use separate folders and compile properly.
// If interviewer asks:
// What is the difference between script and module in TypeScript?

// In a script, variables are added to the global scope, which can cause redeclaration errors. In a module, variables are scoped to the file. A file becomes a module if it contains at least one import or export statement.