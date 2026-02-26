

type PersonInfo=readonly [string,number,boolean];


const displayPersonInfo=(person:PersonInfo)=>{

  const [name,age,hasDriverLicense]=person;
  console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicense?"Yes":"No"}`)
}


const person1:PersonInfo=['Akash',23,true];
// order matters here 
const preson2:PersonInfo=['thapa',17,false];


displayPersonInfo(person1);
displayPersonInfo(preson2);

// ✅ 1️⃣ Question 1 – ProductInfo Tuple
// 🔹 Product name (string)
// 🔹 Price (number)
// 🔹 Quantity (number)

// Product Tuple Type
type ProductInfo = [string, number, number];

// Create product instances
const product1: ProductInfo = ["Laptop", 50000, 2];
const product2: ProductInfo = ["Mobile", 20000, 3];

// Function to display product info
const displayProduct = (product: ProductInfo): void => {
  const [name, price, quantity] = product;
  const total = price * quantity;

  console.log(`Product: ${name}`);
  console.log(`Price: ₹${price}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Total Price: ₹${total}`);
  console.log("---------------------------");
};

displayProduct(product1);
displayProduct(product2);


// ✅ 2️⃣ Question 2 – SubjectGrade Tuple
// 🔹 Subject name (string)
// 🔹 Grade (number)

// Subject Grade Tuple
type SubjectGrade = [string, number];

// Student grades
const grades: SubjectGrade[] = [
  ["Math", 85],
  ["English", 90],
  ["Science", 88],
];

// Function to calculate average
const calculateAverageGrade = (subjects: SubjectGrade[]): number => {
  let total = 0;

  for (const [, grade] of subjects) {
    total += grade;
  }

  return total / subjects.length;
};

// Display grades
const displayGrades = (subjects: SubjectGrade[]): void => {
  subjects.forEach(([subject, grade]) => {
    console.log(`${subject}: ${grade}`);
  });

  console.log("Average Grade:", calculateAverageGrade(subjects));
};

displayGrades(grades);


// ✅ 3️⃣ Question 3 – WeatherData Tuple
// 🔹 City name (string)
// 🔹 Temperature (number)
// 🔹 Weather condition (string)
// Weather Data Tuple
type WeatherData = [string, number, string];

const weatherList: WeatherData[] = [
  ["Pune", 28, "Sunny"],
  ["Delhi", 35, "Hot"],
  ["Mumbai", 30, "Humid"],
];

// Function to display weather
const displayWeather = (data: WeatherData[]): void => {
  data.forEach(([city, temp, condition]) => {
    console.log(
      `City: ${city} | Temperature: ${temp}°C | Condition: ${condition}`
    );
  });
};

displayWeather(weatherList);


// 🧠 When to Use Tuple?
// Use Tuple when:

// ✔ Fixed number of elements
// ✔ Order is important
// ✔ Each position has different type
// ✔ Small structured data
// Example:
// Coordinates → [x, y]
// Product → [name, price, quantity]
// API response → [statusCode, message]

// ⚡ Tuple vs Array (Interview Quick Answer)
// Tuple	Array
// Fixed length	Dynamic length
// Fixed types per index	Same type for all elements
// Order matters	Order less strict
// Used for structured small data	Used for lists

