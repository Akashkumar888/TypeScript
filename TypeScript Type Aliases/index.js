"use strict";
// ✅ Solution (Proper TypeScript Way)
// 🔹 Using type
//TypeScript Type Aliases type name startWith Uppercase here = 
const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
console.log(product);
console.log(product.name); // Laptop
console.log(product.price); // 1000
product.quantity = 10;
console.log(product.quantity); // 10
const calculateTotalPrice = (product) => {
    return `${product.name} total cost is ${product.price * product.quantity}`;
};
console.log(calculateTotalPrice(product));
// 🔥 Why Do We Use type and interface?
// In TypeScript, we use them to:
// ✅ Define the shape (structure) of data
// ✅ Improve readability
// ✅ Avoid repeating types
// ✅ Enable type safety
// ✅ Make large apps maintainable
// Without them, your code becomes messy in big projects.
// 🚀 2️⃣ Are type and interface Used Only for Objects?
// ❌ NO.
// This is very important.
// ✅ interface → Mostly Used For Objects
// Used for:
// Objects
// Class structure
// API response shapes
// ✅ type → Can Be Used Anywhere
// This is the BIG difference.
// 🔹 1. Object
// type User = {
//   name: string;
// };
// 🔹 2. Union Types
// type Status = "success" | "error" | "loading";
// 🔹 3. Function Types
// type Add = (a: number, b: number) => number;
// const sum: Add = (x, y) => x + y;
// 🔹 4. Primitive Alias
// type ID = number;
// 🔹 5. Tuple
// type Coordinates = [number, number];
