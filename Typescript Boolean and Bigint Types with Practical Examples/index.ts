
let isMyNameAkash:boolean=true;

let isDone:boolean=true;
let hasStarted:boolean=false;

const isEven=(num:number):boolean =>{
  if(num%2==0)return true;
  return false;
}

console.log(isEven(10));


const isDivisibleByFourAndEight=(num:number):boolean=>{
  // return num%4===0 && num%8===0;
  return num%8===0;
}


console.log(isDivisibleByFourAndEight(40));


let maxNumber = Number.MAX_SAFE_INTEGER;
console.log("Max Safe Integer:", maxNumber);

// BigInt values
let bigNumber: bigint = 9007199254740991n;
let anotherBigNumber: bigint = 1234567890123456789n;

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



let x: bigint = 20n;
let y: bigint = 10n;

let sumi = x + y;
let diff = x - y;
let mul = x * y;

console.log(sumi);
console.log(diff);
console.log(mul);


// If interviewer asks:
// Do you use global variables in TypeScript projects?
// You say:

// No. In production-level applications, we avoid global variables. We use ES modules where each file has its own scope. This prevents naming conflicts and improves maintainability.

export {};
