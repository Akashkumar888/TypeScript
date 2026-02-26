"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let isMyNameAkash = true;
let isDone = true;
let hasStarted = false;
const isEven = (num) => {
    if (num % 2 == 0)
        return true;
    return false;
};
console.log(isEven(10));
const isDivisibleByFourAndEight = (num) => {
    // return num%4===0 && num%8===0;
    return num % 8 === 0;
};
console.log(isDivisibleByFourAndEight(40));
let maxNumber = Number.MAX_SAFE_INTEGER;
console.log("Max Safe Integer:", maxNumber);
// BigInt values
let bigNumber = 9007199254740991n;
let anotherBigNumber = 1234567890123456789n;
console.log("Big Number 1:", bigNumber);
console.log("Big Number 2:", anotherBigNumber);
// Arithmetic Operations
let sum = bigNumber + anotherBigNumber;
let difference = bigNumber - anotherBigNumber;
let product = bigNumber * anotherBigNumber;
let division = bigNumber / anotherBigNumber;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Division:", division);
let x = 20n;
let y = 10n;
let sumi = x + y;
let diff = x - y;
let mul = x * y;
console.log(sumi);
console.log(diff);
console.log(mul);
