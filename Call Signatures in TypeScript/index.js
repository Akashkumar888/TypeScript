"use strict";
// 🔹 1️⃣ What is Call Signature?
// ✅ In TypeScript
// A call signature defines the shape of a function.
// It describes:
// Parameters
// Return type
// But NOT the implementation
// ✅ Object
const student1 = {
    name: "Akash",
    age: 23,
    greet: function (country) {
        return `Welcome My name is ${this.name}, I am ${this.age} yrs old & I am from ${country}`;
    },
};
// ✅ Introduction function
const introduction = (student) => {
    const { name, age } = student; // destructuring
    return `Welcome My name is ${name}, I am ${age} yrs old`;
};
// ✅ Calling
console.log(introduction(student1));
console.log(student1.greet("India"));
// 🔹 6️⃣ When Is Call Signature Used?
// ✅ 1. Inside object types
// type API = {
//   fetchData: (url: string) => Promise<string>;
// }
// ✅ 2. For function types
// type Add = (a: number, b: number) => number;
// ✅ 3. In React (very common)
// type Props = {
//   onClick: () => void;
// }
// ✅ 4. In Context API
// type TodosContext = {
//   handleAddTodo: (task: string) => void;
// }
// 🔥 Interview Answer
// If interviewer asks:
// ❓ What is Call Signature?
// You say:
// A call signature defines the shape of a function including its parameters and return type without providing the implementation. It is commonly used inside type aliases or interfaces to describe function structures.
// 🔹 8️⃣ Important Concept: this
// Inside object method:
// greet: function () { }
// this refers to the object.
// If you use arrow function:
// greet: (country) => { }
// Arrow function does NOT bind this properly.
// For objects, prefer normal function.
