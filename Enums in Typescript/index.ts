// ✅ 1️⃣ When & Where Enums Are Used
// Enums are used when:
// You have a fixed set of related constant values
// You don’t want random strings
// You want type safety + autocomplete
// Real examples:
// User roles (Admin, User)
// Order status (Pending, Shipped, Delivered)
// Days of week
// Months (Jan–Dec)

enum Days {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
}

let today: Days = Days.Monday;

console.log(today); // Monday




enum Months {
  Jan = "January",
  Feb = "February",
  Mar = "March",
  Apr = "April",
  May = "May",
  Jun = "June",
  Jul = "July",
  Aug = "August",
  Sep = "September",
  Oct = "October",
  Nov = "November",
  Dec = "December"
}

let currentMonth: Months = Months.Feb;

console.log(currentMonth); // February


enum Roles {
  user = "user",
  admin = "admin"
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};



const user1: LoginDetails = {
  name: "ankit",
  email: "ankit45@gmail.com",
  password: "qwerty1223",
  role: Roles.admin,
};

const user2: LoginDetails = {
  name: "akash",
  email: "akash45@gmail.com",
  password: "qwerty456",
  role: Roles.user,
};

const isAdmin = (user: LoginDetails): string => {
  const { name, role } = user;

  return role === Roles.admin
    ? `${name} is allowed to edit the website`
    : `${name} is NOT allowed to edit the website`;
};

console.log(isAdmin(user1));
console.log(isAdmin(user2));


// 🎯 Interview Answer
// ❓ Why use enum instead of string?
// Answer:
// Prevents typo errors ("admn", "Admin", etc.)
// Gives autocomplete
// Strong type safety
// Restricts values to fixed set

// 🔥 Bonus (Important)
// If interviewer asks:
// Should we always use enum?
// You can say:
// In modern TypeScript, union types are often preferred:
// type Role = "user" | "admin";
// This is lighter and cleaner.


// 🟢 1️⃣ Enum vs Union (Very Important Interview Question)
// ✅ ENUM
// Enum is a special TypeScript feature that creates a set of named constants.

// enum Role {
//   Admin = "admin",
//   User = "user"
// }

// let userRole: Role = Role.Admin;
// ✔ Features:
// Creates a real object in JavaScript (after compilation)
// Provides named constants
// Can be numeric or string
// Slight runtime overhead
// ✅ UNION TYPE
// Union restricts values without creating extra JS code.

// type Role = "admin" | "user";
// let userRole: Role = "admin";
// ✔ Features:
// Only exists in TypeScript
// Removed after compilation
// No runtime cost
// Cleaner & modern approach

// 🔥 Key Differences
// Feature	Enum	Union
// JS Output	Yes (object created)	No
// Runtime Cost	Yes	No
// Autocomplete	Yes	Yes
// Safer	Yes	Yes
// Modern TS Preferred	❌ Less	✅ More
// 🎯 Interview Answer
// If interviewer asks:
// Enum vs Union — which should we use?
// Answer:
// In modern TypeScript, union types are preferred because they provide the same type safety without generating extra JavaScript code. Enums are useful when we need named constants and runtime presence.

// 🟢 2️⃣ Numeric Enum vs String Enum
// 🔹 Numeric Enum
// enum Status {
//   Pending,
//   Approved,
//   Rejected
// }

// console.log(Status.Pending); // 0
// console.log(Status[0]); // "Pending"
// 🔥 Output JS:
// It creates reverse mapping.

// {
//   0: "Pending",
//   1: "Approved",
//   2: "Rejected",
//   Pending: 0,
//   Approved: 1,
//   Rejected: 2
// }
// ✔ Features:
// Auto increments
// Reverse mapping supported
// Less readable in debugging

// 🔹 String Enum
// enum Status {
//   Pending = "PENDING",
//   Approved = "APPROVED",
//   Rejected = "REJECTED"
// }

// console.log(Status.Pending); // "PENDING"
// ✔ Features:
// No reverse mapping
// More readable
// Better for APIs / Backend
// Preferred in real projects
// 🎯 Interview Answer

// String enums are preferred in real applications because they are more readable and safer when working with APIs. Numeric enums are rarely used unless reverse mapping is required.

// 🟢 3️⃣ const enum (Performance Topic 🔥)
// 🔹 Normal Enum
// enum Role {
//   Admin = "admin",
//   User = "user"
// }

// let r = Role.Admin;
// JS Output:

// Creates object in JS.

// 🔹 const enum
// const enum Role {
//   Admin = "admin",
//   User = "user"
// }

// let r = Role.Admin;
// JS Output:

// No object created.

// Compiled JS:

// let r = "admin";

// 🚀 It replaces enum values inline.

// ✅ Why const enum is Faster?

// Because:

// No runtime object

// No memory allocation

// Values directly replaced during compilation

// ⚠ Important Limitation

// const enum:

// Cannot be used with isolatedModules

// Not supported in some build tools (like Babel without config)

// 🔥 Final Comparison
// Type	Runtime Object	Performance	Reverse Mapping	Recommended
// Numeric Enum	Yes	Medium	Yes	❌ Rare
// String Enum	Yes	Medium	No	✅ Good
// const Enum	No	🚀 Best	No	✅ Best for performance
// Union	No	🚀 Best	No	✅ Modern preferred


// 🧠 Best Practice (2026 Modern TS)

// For most frontend apps (React, Node):

// ✅ Use Union Types

// type Role = "admin" | "user";

// For backend or large systems:

// ✅ Use String Enum

// For performance critical:

// ✅ Use const enum

// 🎯 Final Interview One-Line Answer

// Union types are lightweight and preferred in modern TypeScript. String enums are used when runtime representation is needed. const enums improve performance by removing runtime objects.