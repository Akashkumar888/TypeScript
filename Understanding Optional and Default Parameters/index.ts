
// function define
const greet3=(name:string,id:number = 1):string =>{
 return `Welcome, ${name} and ur id is ${id}`;
}

// function call

console.log(greet3("akash"));

// function define
const greet4=(name:string,id:number = 1):string =>{ // parameters
 return `Welcome, ${name} and ur id is ${id}`;
}

// function call

console.log(greet4("akash",5));// arguments
// Now you pass 5, so default value is ignored.

// optional parameter  -> ?


// function define
const greet5=(name:string,id?: number):string =>{
  if (id !== undefined) {
    return `Welcome, ${name} and ur id is ${id}`;
  } else {
    return `Welcome, ${name}`;
  }
}

// function call

console.log(greet5("akash"));


// function define
const greet6=(name:string,id?: number):string =>{
 if (id !== undefined) {
    return `Welcome, ${name} and ur id is ${id}`;
  } else {
    return `Welcome, ${name}`;
  }
}

// function call

console.log(greet6("akash",69));

// ❓ Can we use both ? and default value together?
// ❌ No
// (id?: number = 1)  // ❌ Not allowed
// Because default parameter already makes it optional.
// Correct:
// (id: number = 1)
// 🚀 Final Industry Recommendation
// Use default parameter when value should always exist.
// Use optional parameter when parameter truly may not be provided.
// Never rely on if(id) for numbers.
// Always check id !== undefined.
