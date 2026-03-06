
// 1️⃣ Short Interview Answer
// If interviewer asks:
// “Should we use Functions or Classes in TypeScript React?”
// You answer:
// In modern React development, functional components are preferred over class components because they are simpler, easier to maintain, and support React Hooks like useState and useEffect. Class components were used earlier, but most modern MERN and frontend projects use functional components.

// 2️⃣ Functional Components in TypeScript (Modern Way)
// Functional components are simple functions that return JSX.
// Example:

// type Props = {
//   name: string;
//   age: number;
// };

// const UserCard: React.FC<Props> = ({ name, age }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Age: {age}</p>
//     </div>
//   );
// };

// export default UserCard;
// Usage:
// <UserCard name="Akash" age={23} />

// 3️⃣ Functional Component with State (Hooks)
// Example using useState:

// import { useState } from "react";

// const Counter = () => {

//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// };

// export default Counter;
// What is this?
// This is industry standard React code.

// 4️⃣ Functional Component with useEffect
// Example:
// import { useEffect, useState } from "react";
// const Users = () => {
//   const [users, setUsers] = useState<string[]>([]);
//   useEffect(() => {
//     setUsers(["Akash", "Rahul", "Vinod"]);
//   }, []);
//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user}>{user}</p>
//       ))}
//     </div>
//   );
// };

// export default Users;
// What is this?
// 5️⃣ Class Components (Old React Way)
// Before React Hooks, developers used class components.
// Example:
// import React, { Component } from "react";
// type State = {
//   count: number;
// };
// class Counter extends Component<{}, State> {
//   state: State = {
//     count: 0
//   };
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increment}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }
// export default Counter;
// What is this?
// But today this is rarely used.
// 6️⃣ Functional vs Class Components
// Feature	Functional	Class
// Syntax	Simple	Complex
// Hooks	✔ Supported	❌ Not supported
// Performance	Better	Slightly heavier
// Code size	Smaller	Larger
// Industry usage	⭐ Most common	Rare
// 7️⃣ Why Industry Prefers Functional Components
// Reasons:
// 1️⃣ Less boilerplate code
// 2️⃣ Easier to read
// 3️⃣ React Hooks support
// 4️⃣ Better logic reuse with custom hooks
// 5️⃣ Cleaner TypeScript integration

// Example:
// const useFetch = () => {}
// Hooks cannot be used in class components.
// 8️⃣ MERN Stack Best Practice
// In MERN projects developers usually use:
// React + TypeScript
// Functional Components
// Hooks
// Context API
// Custom Hooks
// Example structure:
// src
//  ├ components
//  │   ├ Navbar.tsx
//  │   ├ UserCard.tsx
//  │
//  ├ hooks
//  │   ├ useFetch.ts
//  │
//  ├ pages
//  │   ├ Home.tsx
//  │
//  └ App.tsx
// 9️⃣ Real MERN Example
// User component:
// type User = {
//   id: number;
//   name: string;
// };
// const UserList = () => {
//   const users: User[] = [
//     { id: 1, name: "Akash" },
//     { id: 2, name: "Rahul" }
//   ];

//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// };
// 🔟 Interview Conclusion
// Best answer:
// Functional components are the recommended approach in modern React development because they are simpler and support hooks. Class components were used earlier but are now mostly replaced by functional components in MERN stack and frontend projects.
// 🧠 Pro Tip (Important)
// Many companies ban class components completely.
// Example frameworks:
// Next.js
// Remix
// Vite + React
// All prefer functional components.
