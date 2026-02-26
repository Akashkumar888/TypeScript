
console.log("This is classes");

// tsc classes.ts --watch   -> classes.ts ko watch karega 
// tsc classes.ts -w         -> classes.ts ko watch karega 
// both above same
// tsc --init this create tsconfig.json file 
// tsc --watch        -> ek folder ke sare file ko watch karega 
// tsc -w             -> ek folder ke sare file ko watch karega


// private public access modifiers
// class Department{
//   // by default all things are public 
//   // public name:string;
//   // private employees:string[];
//   constructor(public name:string,private employees:string[]){ // shorthand property 
//     // this.name=n;
//     // this.employees=[];
//   }
//   describe(this.Department){
//     console.log("Department",this.name);
//   }
//   addEmployee(emp:string){
//     this.employees.push(emp);
//   }
//   printEmployee(){
//     console.log("Number of employee: ",this.employees.length);
//     console.log("Name of employee: ",this.employees);
//   }
// };

// const accounting=new Department("CSE",[]);
// accounting.describe();

// // const accountingCopy={
// //   name:"ECE",
// //   describe:accounting.describe
// // }
// // accountingCopy.describe();

// accounting.addEmployee("Akash");
// accounting.addEmployee("Priya");
// accounting.printEmployee();


// readonly 

// class Department{
//   // by default all things are public 
//   public name:string;
//   private employees:string[];
//   private readonly id:string;
//   constructor(n:string){ // shorthand property 
//    this.name=n;
//    this.employees=[];
//    this.id="d1";// only once you can initialize 
//   }

//   describe(this.Department){
//     console.log("Department",this.name);
//   }

//   addEmployee(emp:string){
//     this.employees.push(emp);
//   }

//   printEmployee(){
//     console.log("Number of employee: ",this.employees.length);
//     console.log("Name of employee: ",this.employees);
//   }
// };



// inheritance
// override properties & protected access modifier 

class Department{
  // by default all things are public 
  public name:string;
  protected employees:string[];
  private readonly id:string;
  constructor(n:string){ // shorthand property 
   this.name=n;
   this.employees=[];
   this.id="d1";// only once you can initialize 
  }

  describe(this.Department){
    console.log("Department: ",this.name);
    console.log("Id: " ,this.id);
  }

  addEmployee(emp:string):void{
    this.employees.push(emp);
  }
  
  printEmployee(){
    console.log("Number of employee: ",this.employees.length);
    console.log("Name of employee: ",this.employees);
  }
};

// setter and getter methods 

class AccountingDepartment extends Department {
//  reports:string[]=[];
 constructor(id:string,private reports:string[]){
 super(id); // it calls parent class or base class constructor 
 }
 addReports(text:string){
  this.reports.push(text);
 }
 printReports(){
  console.log("Reports: ",this.reports);
 }
 addEmployee(emp:string) :void{
    if(emp==='Patel'){
      return;
    }
    this.employees.push(emp);
  }

  get getReports(){
    if(this.reports.length>0){
      return this.reports;
    }
    throw new Error("No reports available");
  };

  set setReports(value:string){
    if(!value){
      throw new Error("Please pass valid value.");
    }
    this.reports.push(value);
  }
};

const accDep=new AccountingDepartment("d2",[]);
accDep.addReports("Bugs");
accDep.printReports();
accDep.describe();


accDep.addEmployee("Ankit");
accDep.addEmployee("Kumar");
accDep.printEmployee();


// setter and getter
