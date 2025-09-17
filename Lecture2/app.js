// object array tuple enum
// console.log("Lets learn Object....");
// const person: {
//   firstName:string,
//   age:Number,
//   xyz:{
//     address:string
//   }
// }={
//   firstName:"Akash",
//   age:22,
//   xyz:{
//     address:"Mumbai"
//   }
// };
// console.log("Lets learn Array....");
// const person: {
//   firstName:string,
//   age:Number,
//   skills:string[], //  array of string
//   marks:Number[], // array of number
//   product:[Number,string]
// }={
//   firstName:"Akash",
//   age:22,
//   skills: ["Reactjs","Nodejs","DSA"],
//   marks:[90,98,95],
//   product:[10,"Macbook M2"],
// };
// let favouriteLanguage: string[];
// favouriteLanguage=["Hindi", "English"];
// console.log(favouriteLanguage);
// let anything: any[]; // loose ts pwer
// anything=["Akash", "kumar",20,90.98];
// console.log(anything);
// console.log(person);
// console.log(person.firstName);
// console.log(person.age);
// console.log(person.skills);
// console.log(person.marks);
// console.log(person.product);
// // console.log(person.lastName); not exist in ts 
// let user: [string, number, boolean];
// user = ["Akash", 22, true]; // ✅ correct
// user = [22, "Akash", true]; ❌ wrong order
console.log("Lets learn enum....");
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
;
var person = {
    name: "patel",
    age: 21,
    skills: [10, "Macbook Air M2"],
    role: Role.Author
};
// Define a function that takes a role and logs the corresponding string
function logRole(role) {
    if (role === Role.Author) {
        console.log("Author");
    }
    else if (role === Role.Admin) {
        console.log("Admin");
    }
    else if (role === Role.User) {
        console.log("User");
    }
    else {
        console.log("Unknown Role");
    }
}
// Call the function with different enum values to get different outputs
console.log("First output:");
logRole(Role.Admin); // Outputs: "Admin"
console.log("Second output:");
logRole(Role.Author); // Outputs: "Author"
console.log("Third output:");
logRole(Role.User); // Outputs: "User"
