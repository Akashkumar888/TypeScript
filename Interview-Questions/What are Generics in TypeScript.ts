
// What are Generics in TypeScript?
// Generics allow you to write reusable components that work with any data type while preserving type safety.

// ✔ Example: Generic function
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");
identity<number>(10);

// ✔ Generic interface
interface Box<T> {
  item: T;
}

let numberBox: Box<number> = { item: 10 };

// ✔ Generic class
class DataStore<T> {
  data: T;
  constructor(value: T) {
    this.data = value;
  }
}

const s = new DataStore<string>("Akash");
