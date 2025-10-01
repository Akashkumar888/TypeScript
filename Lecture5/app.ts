
console.log("akash");

let userInput :unknown;
let userName :string;
// let userName :any;

// any
// When a variable is of type any, TypeScript disables type checking.
// You can assign it to any other type without restrictions.
// unknown
// unknown is safer than any.
// You can assign anything to unknown, but before using it, you must check its type.



userInput=10;
userName="Kumar";

if(typeof userInput ==="string"){
  userName=userInput;
}

// never return type 
// never is used for functions that never return a value.
// This happens in two main cases:
// Function throws an error.
// Function never ends (infinite loop).

function generateError(message:string,code:number): never{
  throw {message:message,statusCode:code};
}

const res=generateError("Internal server error",500);
console.log(res);
