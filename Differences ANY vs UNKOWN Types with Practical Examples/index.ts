
let myFavNum :any=5;
// any keyword disable the type in typescript 
// like javascript
//“Turn off TypeScript checking for this variable.”

// TypeScript allows everything.
// It behaves like JavaScript.
// TypeScript won’t warn you.
// This defeats the purpose of TypeScript.


myFavNum="Akash";


// 🔥 When would you use any?
// Answer:
// Rarely. Mostly during gradual migration from JavaScript to TypeScript or when dealing with third-party libraries lacking type definitions.


console.log(myFavNum);

let myFavNumber:unknown=55;
if (typeof myFavNumber === "number") {
  console.log(myFavNumber); 
}

myFavNumber=true;

if (typeof myFavNumber === "boolean") {
  console.log(myFavNumber); 
}

myFavNumber=10+5.89647;

if (typeof myFavNumber === "number") {
  console.log(myFavNumber.toFixed(2)); 
}


// A safer version of any.
// You can assign anything to it:
// Use unknown when:
// Handling API response
// Working with dynamic data
// Deserializing JSON
// Accepting user input

// 🔥 Why is unknown safer than any?
// Answer:
// Because unknown forces type narrowing before usage, maintaining type safety, while any disables type checking completely.

// fetch function returning unknown

async function fetchData(): Promise<unknown> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}


async function processData() {
  const response = await fetchData();

  // Safe object check
  if (typeof response === "object" && response !== null) {
    console.log("Object received:", response);
  } else {
    console.log("Response is not an object");
  }
}

// call function
processData();
