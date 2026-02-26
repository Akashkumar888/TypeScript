
// greeting function define
// parameter 
function greet(name:string,id:number){
  console.log(`Welcome, ${name} and your id is ${id}`);
}

// function call
greet("Akash",2);
// arguments 


// fat arrow functions 
const greeting=(name:string,id:number) :string=>{
 return (`Welcome, ${name} and your id is ${id}`);
}

const myGreet=greeting("Kumar",23);

console.log(myGreet);

// is Palindrome

const isPalindrome=(s:string):boolean=>{
  const revS = s.split("").reverse().join("");
  return s===revS;

  // const str = s.toLowerCase();
  // let left = 0;
  // let right = str.length - 1;

  // while (left < right) {
  //   if (str[left] !== str[right]) return false;
  //   left++;
  //   right--;
  // }

  // return true;

}


console.log(isPalindrome("Akash"));

console.log(isPalindrome("madam"));   // true

// 🔥 The Line
// const revS = s.split("").reverse().join("");
// This is called method chaining.
// It does 3 operations step-by-step:

// 🧠 Step 1 → split("")
// What it does:
// Converts a string into an array of characters
// Example:
// let s = "Akash";
// s.split("");
// Result:
// ["A", "k", "a", "s", "h"]
// 👉 Why?
// Because strings don’t have reverse().
// But arrays do.
// 🧠 Step 2 → reverse()
// Now we have an array:
// ["A", "k", "a", "s", "h"]
// Calling:
// .reverse()
// Result:
// ["h", "s", "a", "k", "A"]
// 👉 reverse() works only on arrays.
// 🧠 Step 3 → join("")
// Now we convert the reversed array back to string.
// ["h", "s", "a", "k", "A"].join("")
// Result:
// "hsakA"
// 🔄 Full Flow Diagram
// If:
// s = "Akash"
// Then:

// "Akash"
//    ↓ split("")
// ["A","k","a","s","h"]
//    ↓ reverse()
// ["h","s","a","k","A"]
//    ↓ join("")
// "hsakA"
// So:
// revS = "hsakA"

const calculateAverage = (arr: number[]): number => {
  const n = arr.length;
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum / n;
};


const arr: number[] = [1,2,3,4,5,6,7,8,9,10,5,3,24,83,45,12,32,84,69];

console.log(calculateAverage(arr));




const findMaxValue = (arr: number[]): number => {
  let maxValue = -Infinity;

  for (let num of arr) {
    maxValue = Math.max(maxValue, num);
  }

  return maxValue;
};

console.log(findMaxValue(arr));
