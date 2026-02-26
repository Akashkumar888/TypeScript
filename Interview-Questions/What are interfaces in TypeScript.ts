
// What are interfaces in TypeScript? 
// An interface in TypeScript defines a contract that an object must follow.
// It specifies the shape of an object — which properties it must have, their types, and whether they are optional or readonly.

// 🔹 Why interfaces?
// They give strong typing to objects.
// Help in code consistency across large codebases.
// Used heavily in Angular/OOP patterns.

// ✔ Example:
interface User {
  id: number;
  name: string;
  email?: string;      // optional
  readonly role: string; // cannot be changed
}

const u: User = {
  id: 1,
  name: "Akash",
  role: "Student"
};

// u.role = "Admin"; ❌ Error (readonly)

// 🔹 Interfaces are also used with classes:
interface Person {
  walk(): void;
}

class Student implements Person {
  walk() {
    console.log("Walking...");
  }
}
