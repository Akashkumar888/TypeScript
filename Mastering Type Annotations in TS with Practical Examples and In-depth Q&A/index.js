"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myFavNum = 10;
var myFullName = "Akash kumar";
var myAge = 29;
var pi = 3.1416;
var myNegVal = -5;
var computedValue = Math.sqrt(16);
var nanValue = NaN;
// 🧠 Why is NaN allowed in number?
// In JavaScript (and TypeScript):
// 👉 NaN is actually of type number.
console.log(myFavNum.toString());
var sum1 = myFavNum + 10;
console.log(sum1);
var myFullNameIs = "Akash kumar";
var myFirstName = "Akash";
var myLastName = "Kumar";
var myfullName = "".concat(myFirstName, " ").concat(myLastName);
console.log(myfullName);
var message12 = "Hello, Typescript!";
console.log(message12);
var sentence = "Please subscribe my channel";
var sentenceLength = sentence.length;
console.log(sentenceLength);
var text = "Pleaese subscribe my channel";
var upperCaseText = text.toUpperCase();
var lowerCaseText = text.toLowerCase();
console.log(upperCaseText);
console.log(lowerCaseText);
// These methods return a new string.
// Original string does NOT change (strings are immutable).
var longText = "TypeScript is powerful and scalable";
var shortText = longText.substring(0, 10);
console.log(shortText);
// substring(start, end)
// start → inclusive
// end → exclusive
var str1 = "Akash";
var str2 = "akash";
var areEqual = str1 === str2;
console.log(areEqual); // false
// 🔥 Case-insensitive comparison
var areEqualInsensitive = str1.toLowerCase() === str2.toLowerCase();
var product = "Laptop";
var priceOfLaptop = 50000;
var result = "The product ".concat(product, " is priced at ").concat(priceOfLaptop, " dollars.");
console.log(result);
// ✅ includes()
var text1 = "TypeScript is amazing";
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
var words = text1.split(" ");
// Returns array of strings.
// ✅ trim()
var nameOfAkash = "  Akash  ";
nameOfAkash.trim();
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
