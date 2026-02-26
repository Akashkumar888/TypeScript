
//1. using square brackets:

const numbers:number[]= [1,2,3,4,5,6];

// 2. using the array constructor

const numbers1:number[] = new Array(1,2,3,4,5,6,7);

// 3. using the array of methods

const names:string[] =Array.of("Akash","Kumar","Ankit");

// operation:accessing elements using index

console.log(names[0]);
console.log(names.length);

const value10 = [10, 20, 30, 40];
const value11 = "TypeScript";
const value12 = { city: "Delhi", population: 20000000 };
const value13 = [true, true, false];
const value14 = 99;

// Check if array
console.log(Array.isArray(value10)); // true
console.log(Array.isArray(value11)); // false
console.log(Array.isArray(value12)); // false
console.log(Array.isArray(value13)); // true
console.log(Array.isArray(value14)); // false


const arr: number[] = [1, 2, 3];

// Add element at end
arr.push(4);

// Remove last element
arr.pop();

// Add element at start
arr.unshift(0);

// Remove first element
arr.shift();

console.log(arr);


const nums: number[] = [1, 2, 3, 4, 5];

let sum = 0;

for (const num of nums) {
  sum += num;
}

console.log("Sum:", sum);

const values: number[] = [10, 25, 5, 90, 34];

let max = values[0];

for (const num of values) {
  if (num > max) {
    max = num;
  }
}

console.log("Max value:", max);


const value1 = [1, 2, 3, 4, 5];
const value2 = "Hello, world!";
const value3 = { name: "John", age: 30 };
const value4 = [true, false, true];
const value5 = 42;

function checkArrayAndType(value: unknown) {
  if (Array.isArray(value)) {
    console.log("It is an array ✅");

    if (value.length > 0) {
      console.log("Type of elements:", typeof value[0]);
    } else {
      console.log("Empty array");
    }
  } else {
    console.log("Not an array ❌");
  }
}

checkArrayAndType(value1);
checkArrayAndType(value2);
checkArrayAndType(value3);
checkArrayAndType(value4);
checkArrayAndType(value5);


