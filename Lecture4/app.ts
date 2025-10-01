
console.log("Let's learn functions...");
// function return type

function addNumber(num1:number,num2:number) : number{
  return num1+num2;
}

const sum=addNumber(10,20);
console.log(sum);

function addString(str1:string,str2:string) : string{
  return str1 + str2;
}

const concatenation=addString("Akash","Kumar");
console.log(concatenation);


function addValues(a: number, b: number): number;
function addValues(a: string, b: string): string;

function addValues(a: any, b: any): any {
  return a + b;
}

console.log(addValues(190, 20));        // 30
console.log(addValues("Priya", "Yadav")); // AkashKumar


function greet(name:string) :void {
  console.log(`Hii, ${name}`);
}

greet("Akash");


// let combineFunction : Function;
// // combineFunction=10;// invalid
// // combineFunction=function(){}; // valid


// combineFunction=addNumber;
// console.log(combineFunction(1,3));

// combineFunction=addString;
// console.log(combineFunction("preeti","Yadav"));

// good practice

let combineFunction :(a:number,b:number) =>number;

combineFunction=addNumber;
console.log(combineFunction(20,40));


// function type & callbacks
type CB =(n:number)=>void;

// function addHandle(num1:number,num2:number,cb:(n:number)=>void){
//   const result=num1+num2;
//   cb(result);
// }

function addHandle(num1:number,num2:number,cb:CB){
  const result=num1+num2;
  cb(result);
}
addHandle(89,51,(result:number)=>{
  console.log(result);
});

