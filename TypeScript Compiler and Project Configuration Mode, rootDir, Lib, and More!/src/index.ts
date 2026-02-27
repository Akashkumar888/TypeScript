
console.log("Hey Whats'up");
console.log("Hii EveryOne");


// ✅ 1️⃣ Industry-Level Folder Structure (Frontend TypeScript)
// For a normal TS project (without React/Angular), industry structure looks like this:

// project-root/
// │
// ├── dist/              ➜ Compiled JS output
// │   ├── index.js
// │   └── app.js
// │
// ├── src/               ➜ All TypeScript files
// │   ├── index.ts
// │   ├── app.ts
// │   ├── utils.ts
// │   └── services/
// │       └── api.ts
// │
// ├── public/            ➜ Static files
// │   └── index.html
// │
// ├── tsconfig.json
// ├── package.json
// └── README.md
// 🔥 Rule:

// src → Only TypeScript
// dist → Only compiled JavaScript
// HTML should use dist JS files only

// ✅ 2️⃣ tsconfig.json Setup (Correct Industry Setup)
// Inside tsconfig.json:

// {
//   "compilerOptions": {
//     "target": "ES6",
//     "module": "ES6",
//     "rootDir": "./src",
//     "outDir": "./dist",
//     "strict": true,
//     "sourceMap": true
//   },
//   "include": ["src"]
// }
// Meaning:
// rootDir → where TS files are
// outDir → where JS files will go
// include → compile only src folder

// ✅ 3️⃣ How to Use Multiple TS Files in HTML
// ⚠️ Important:
// HTML cannot directly use multiple TS files.
// You must:
// Compile TS → JS
// Use JS in HTML

// Example
// 📁 src/utils.ts
// export function greet(name: string) {
//   return `Hello ${name}`;
// }
// 📁 src/app.ts
// import { greet } from "./utils.js";

// console.log(greet("Akash"));
// 📁 public/index.html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>TypeScript App</title>
// </head>
// <body>

//   <script type="module" src="../dist/app.js"></script>

// </body>
// </html>
// What is this?

// ⚠️ Important:
// Always use type="module"

// ✅ 4️⃣ Watch Mode (Auto Compile)
// To automatically compile when you save files:
// tsc --watch
// OR short:
// tsc -w
// Now whenever you save .ts file:
// ✔ It auto compiles
// ✔ Shows errors
// ✔ Updates JS

// ✅ 5️⃣ How To Check If Code Is Correct (Industry Way)
// Option 1 — Watch Mode (Recommended)
// tsc -w
// If error exists:
// ❌ It will show in terminal
// If correct:
// ✔ Found 0 errors
// Option 2 — VS Code Live Error
// Make sure in tsconfig:
// "strict": true
// Now VS Code will show red underline instantly.

// ✅ 6️⃣ How To Run Project Properly
// Open HTML file using:
// ✔ Live Server extension
// OR
// ✔ Open directly in browser

// ✅ 7️⃣ Pro Industry Setup (Using npm)
// Initialize project:
// npm init -y
// npm install typescript --save-dev
// npx tsc --init
// Add script in package.json:

// "scripts": {
//   "build": "tsc",
//   "watch": "tsc -w"
// }

// Now run:
// npm run watch
// 🔥 This is industry standard.
// 🧠 Important Concept
// ❓ How to Add Many TS Files?

// You DON'T add many <script> tags.
// Instead:
// Use import/export between TS files.
// Then only load main file in HTML.
// Example:
// HTML → app.js
// app.ts → imports utils.ts
// utils.ts → exports function
// 🎯 Final Professional Setup For You

// Based on your screenshot:
// Move:
// index.html → public folder
// ts files → src folder
// Then in HTML:

// <script type="module" src="../dist/index.js"></script>
// What is this?
// 🚀 Interview Question
// Why we don't link multiple JS files in HTML in modern apps?
// Answer:
// Because we use ES Modules (import/export) and bundlers like:
// Vite
// Webpack
// Parcel


