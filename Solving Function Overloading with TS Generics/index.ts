// 🔷 1️⃣ Normal Function Overloading (Without Generics)
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// function add(a: any, b: any): any {
//   return a + b;
// }

// const r1 = add(5, 10);           // number
// const r2 = add("Hello ", "TS");  // string



function add<Type,U>(a:Type,b:U){
  console.log(typeof a,a);
  console.log(typeof b,b);
}

const result1=add<number,string>(5,"Akash");
const result2=add<string,number>("Hello",10);
const result3=add<boolean,number>(true,50);


// 🔷 4️⃣ Example 2 – Different Return Types
function format(value: number): string;
function format(value: Date): string;
function format(value: any): string {
  if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
  }
  if (value instanceof Date) {
    return value.toDateString();
  }
  return "";
}

const p1 = format(100);          // "$100.00"
const p2 = format(new Date());   // date string

// 🔥 Very common in real apps.


// 🔷 5️⃣ Example 3 – Overloading with Generics (Advanced)

function identity<T>(value: T): T;
function identity<T>(value: T[]): T[];
function identity(value: any): any {
  return value;
}

const single = identity(10);        // number
const arr = identity([1, 2, 3]);    // number[]


// Here:
// If single value → return single
// If array → return array


// 🔷 6️⃣ Example 4 – Smart API Fetch Example
// 🔷 Example – Smart API Fetch with Generics

interface User {
  name: string;
}

interface Product {
  title: string;
}

// ✅ No need of overload here
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}

// ✅ Use FULL URL (Node.js requires absolute URL)
const userData = fetchData<User>(
  "https://jsonplaceholder.typicode.com/users/1"
);

const productData = fetchData<Product>(
  "https://fakestoreapi.com/products/1"
);

// Handle results
userData.then(user => {
  console.log("User Name:", user.name);
});

productData.then(product => {
  console.log("Product Title:", product.title);
});

// 🔥 This is real-world generics usage.


// 🔷 7️⃣ Example 5 – Conditional Overload
function getLength(value: string): number;
function getLength<T>(value: T[]): number;
function getLength(value: any): number {
  return value.length;
}

const len1 = getLength("Akash");     // 5
const len2 = getLength([1, 2, 3]);   // 3

// 🔥 Important Interview Question
// ❓ When should we use Overloading?

// Use when:
// Different parameter types
// Different return types
// Different internal logic

// Example:

// number → format currency
// date → format date
// ❓ When should we use Generics?

// Use when:
// Same logic
// Only type changes
// Want reusable code

// Example:
// identity function
// API response
// Reusable components

