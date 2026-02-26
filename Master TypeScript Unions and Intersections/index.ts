
// union 

// fat arrow functions define
// Union Type Example
const userInput = (value: string | number | boolean): string | number => {

  if (typeof value === "number") {
    return value * 2; // double number
  }

  if (typeof value === "string") {
    return value.toUpperCase(); // uppercase string
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No"; // boolean format
  }

  throw new Error("Invalid input type");
};

// Function Calls
console.log(userInput(10));            // 20
console.log(userInput("Akash"));       // AKASH
console.log(userInput(true));          // Yes
console.log(userInput(false));         // No



// ✅ 2️⃣ Union With Arrays
// Case 1: Array that can contain both types
const mixedArray: (string | number)[] = ["Akash", 23, "India", 100];

mixedArray.forEach((item) => {
  if (typeof item === "number") {
    console.log(item * 2);
  } else {
    console.log(item.toUpperCase());
  }
});


// Case 2: Entire array is either string[] OR number[]
const processArray = (arr: string[] | number[]) => {

  if (typeof arr[0] === "string") {
    console.log("String Array:", arr.map(item => item.toUpperCase()));
  } else {
    console.log("Number Array:", arr.map(item => item * 2));
  }
};

processArray(["akash", "thapa"]);
processArray([10, 20, 30]);


// 🎯 Real Interview Upgrade Example
type ApiResponse =
  | { success: true; data: string[] }
  | { success: false; error: string };

const handleResponse = (response: ApiResponse) => {

  if (response.success === true) {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.error);
  }
};

// This is called Discriminated Union 🔥

// 🧠 When We Use Union Types
// We use union when:

// ✔ API response can return success OR error
// ✔ Input can be string OR number
// ✔ Form field may accept number OR null
// ✔ Role can be "admin" | "user"
// ✔ Value can be array OR single item

// ⚡ Important Rule
// If you use union:
// 👉 You MUST check type before using it
// 👉 Use typeof, in, or discriminated property
// Otherwise TypeScript will give error.





// intersections

// -----------------------------
// INTERSECTION BASIC EXAMPLE
// -----------------------------

type Person = {
  name: string;
  age: number;
};

type Employee = {
  emp_id: number;
  department: string;
};

// Combine both types
type EmployeeDetails = Person & Employee;

// Now object must contain ALL properties
const employee: EmployeeDetails = {
  name: "Akash",
  age: 23,
  emp_id: 1,
  department: "IT"
};

console.log(employee);





// -----------------------------
// INTERSECTION WITH USER PROFILE
// -----------------------------

type User = {
  name: string;
  age: number;
};

type MyLocation = {
  city: string;
  country: string;
};

// Intersection type
type UserProfile = User & MyLocation;

// Objects
const user: User = {
  name: "Akash",
  age: 23
};

var userLocation: MyLocation = {
  city: "Pune",
  country: "India"
};

// Function that RETURNS combined object
const createUserProfile = (
  user: User,
  location: MyLocation
): UserProfile => {
  return {
    ...user,
    ...location
  };
};

// Call function
const myCompleteInfo: UserProfile = createUserProfile(user, userLocation);

console.log(myCompleteInfo);

// 🧠 When Do We Use Intersection?
// Use intersection when:

// ✔ You want to merge two types
// ✔ You want one object to satisfy multiple structures
// ✔ Used in:
// User + Account
// Employee + Personal Info
// API response merging
// React props merging
// Authentication + Role

type Account = {
  accountNumber: string;
  balance: number;
};

type FullUserData = User & Account;

const fullUser: FullUserData = {
  name: "Akash",
  age: 23,
  accountNumber: "123456789",
  balance: 50000
};

console.log(fullUser);