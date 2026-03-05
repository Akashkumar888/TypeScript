
// 1️⃣ Interface vs Type in TypeScript
// Both are used to define types of data.
// Example using interface:

// interface Student {
//   name: string;
//   age: number;
// }

// Example using type:

// type Student = {
//   name: string;
//   age: number;
// };

// Both behave the same for simple objects.
// 2️⃣ Interface Supports Declaration Merging
// Interfaces with the same name automatically merge together.
// Example:

// interface Stud {
//   name: string;
//   age: number;
// }

// interface Stud {
//   city: string;
//   state: string;
// }

// TypeScript merges them internally as:
// interface Stud {
//   name: string;
//   age: number;
//   city: string;
//   state: string;
// }

// Usage:
// const data: Stud = {
//   name: "Vinod",
//   age: 29,
//   city: "Pune",
//   state: "MH"
// };

// ✔ This works.
// 3️⃣ Type Cannot Be Declared Twice
// If you try:
// type Stud = {
//   name: string;
// };

// type Stud = {
//   age: number;
// };
// ❌ TypeScript error:
// Duplicate identifier 'Stud'
// So type aliases cannot merge automatically.
// 4️⃣ But Type Has Another Power
// Types support Union and Intersection.
// Example:
// Union
// type Status = "success" | "error" | "loading";
// Interface cannot do this.

// Intersection
// type Person = {
//   name: string;
// };

// type Address = {
//   city: string;
// };
// type BioData = Person & Address;
// Result:
// {
//   name: string;
//   city: string;
// }

// Interfaces can extend but cannot do intersections like this easily.
// 5️⃣ Interface Extending Interface
// Example:
// interface Person {
//   name: string;
// }
// interface Student extends Person {
//   age: number;
// }
// Result:
// {
//   name: string;
//   age: number;
// }
// 6️⃣ Industry Rule (Very Important)
// Most companies follow this guideline:
// Use Case	Prefer
// Object shapes	Interface
// API responses	Interface
// Class contracts	Interface
// Union types	Type
// Primitive combinations	Type
// Function types	Type
// 7️⃣ Example From Real Industry Code
// API response:
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// Union type:
// type Role = "admin" | "user" | "guest";
// 8️⃣ Your Teacher’s Example Explained

// Your code:
// interface Stud {
//   name: string;
//   age: number;
// }

// interface Stud {
//   city: string;
//   state: string;
// }

// Merged result:
// interface Stud {
//   name: string;
//   age: number;
//   city: string;
//   state: string;
// }

// Then:
// interface Data extends Stud {}
// Usage:
// const BioData: Data = {
//   name: "vinod",
//   age: 29,
//   city: "Pune",
//   state: "MH"
// };

// 9️⃣ Interview Answer (Short)
// If interviewer asks:
// Difference between Type and Interface in TypeScript?
// Answer:
// Interfaces are mainly used to define object structures and support declaration merging, meaning multiple interfaces with the same name are combined.
// Types are more flexible because they support unions, intersections, and advanced type compositions, but they cannot be redeclared or merged.

// 🔟 Quick Memory Trick
// Interface → Object structure
// Type → Advanced type composition
// 🧠 One Important Interview Trap
// They may ask:
// Can interface extend type?
// Answer:
// ✔ Yes.
// Example:
// type Person = {
//   name: string;
// };
// interface Student extends Person {
//   age: number;
// }
