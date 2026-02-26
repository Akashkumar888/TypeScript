
// 🔷 1️⃣ What is Generic?
// Generic means:
// "Write code once, use it for multiple types safely."



function logAndReturn<Type>(value: Type): Type {
  return value;
}

const numberResult: number = logAndReturn<number>(42);
const stringResult: string = logAndReturn<string>("Hello, Generic");
const booleanResult: boolean = logAndReturn<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement([10, 20, 30]);
const firstString = getFirstElement(["A", "B", "C"]);

console.log(firstNumber);  // 10
console.log(firstString);  // "A"


function pair<K, V>(key: K, value: V) {
  return { key, value };
}

const p1 = pair<string, number>("age", 23);
const p2 = pair<number, string>(1, "Akash");

console.log(p1);
console.log(p2);


function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "Akash",
  age: 23
};

const userName = getProperty(user, "name");
console.log(userName);


interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const response1: ApiResponse<string> = {
  success: true,
  data: "Login Successful"
};

const response2: ApiResponse<number[]> = {
  success: true,
  data: [1, 2, 3]
};


// 🔷 10️⃣ When We Use Generics?
// Use Generics when:
// ✔ You want reusable functions
// ✔ You want reusable components
// ✔ API responses
// ✔ Utility functions
// ✔ Data structures
// ✔ React reusable components
// ✔ Custom hooks
// ✔ Libraries

// 🔷 11️⃣ Interview Definition (Important)
// If interviewer asks:
// What is Generic in TypeScript?
// You say:
// Generics allow us to write reusable and type-safe code that works with multiple data types without losing type information. They provide flexibility while maintaining strict type checking.

// 🔷 12️⃣ Generic vs Union Difference (Important)
// Generic	Union
// Works with ANY type	Limited predefined types
// Reusable	Fixed options
// Preserves type	Returns union type
// Example:
// function test(value: string | number): string | number
// Return type is always string | number
// But generic:
// function test<T>(value: T): T
// If input is number → return number
// If input is string → return string
// 🔥 This is powerful.

