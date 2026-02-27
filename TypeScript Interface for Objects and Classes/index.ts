
interface Greet {
  name:string;
  age:number;
}

const greet:Greet={
  name:'Akash',
  age:29
}

console.log(greet);


const introduce = (person: Greet): string => {
  return `My name is ${person.name} and I am ${person.age} years old`;
};

console.log(introduce(greet));




interface Person {
  name: string;
  age: number;
  greet(): string;
}

const user: Person = {
  name: "Akash",
  age: 23,
  greet() {
    return `Hello, I am ${this.name}`;
  }
};

console.log(user.greet());


interface User {
  name: string;
  age?: number; // optional
}

const user1: User = {
  name: "Akash"
};

interface ApiUser {
  id: number;
  name: string;
  email: string;
}

const userData: ApiUser = {
  id: 1,
  name: "Akash",
  email: "akash@gmail.com"
};



// -----------------------------
// 1️⃣ Product Interface
// -----------------------------
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount?: number; // optional
}

// -----------------------------
// 2️⃣ Product Objects
// -----------------------------
const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
  quantity: 5
};

const product2: Product = {
  id: 2,
  name: "Mobile",
  price: 500,
  quantity: 3,
  discount: 10 // 10% discount
};

// -----------------------------
// 3️⃣ Calculate Total Price Function
// -----------------------------
const calculateTotalPrice = (product: Product): number => {

  const total = product.price * product.quantity;

  if (product.discount) {
    return total - (total * product.discount) / 100;
  }

  return total;
};

// -----------------------------
// 4️⃣ Output
// -----------------------------
console.log("Product 1 Total:", calculateTotalPrice(product1));
console.log("Product 2 Total:", calculateTotalPrice(product2));


// -----------------------------
// 5️⃣ Extend Interface
// -----------------------------
interface DigitalProduct extends Product {
  fileSize: string;
  format: string;
}

// -----------------------------
// 6️⃣ Digital Product Object
// -----------------------------
const ebook: DigitalProduct = {
  id: 3,
  name: "TypeScript Guide",
  price: 200,
  quantity: 1,
  fileSize: "5MB",
  format: "PDF"
};

console.log("Digital Product Total:", calculateTotalPrice(ebook));