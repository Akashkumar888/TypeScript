
console.log("This is classes");

// tsc classes.ts --watch   -> classes.ts ko watch karega 
// tsc classes.ts -w         -> classes.ts ko watch karega 
// both above same
// tsc --init this create tsconfig.json file 
// tsc --watch        -> ek folder ke sare file ko watch karega 
// tsc -w             -> ek folder ke sare file ko watch karega


// private public access modifiers
class Department{
  name:string;
  employees:string[];
  constructor(n:string){
    this.name=n;
    this.employees=[];
  }
  describe(this.Department){
    console.log("Department",this.name);
  }
  addEmployee(emp:string){
    this.employees.push(emp);
  }
  printEmployee(){
    console.log("Number of employee: ",this.employees.length);
    console.log("Name of employee: ",this.employees);
  }
};

const accounting=new Department("CSE");
accounting.describe();

// const accountingCopy={
//   name:"ECE",
//   describe:accounting.describe
// }
// accountingCopy.describe();

accounting.addEmployee("Akash");
accounting.addEmployee("Priya");
accounting.printEmployee();