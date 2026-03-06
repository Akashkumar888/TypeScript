
// console.log("Hello, It is working properly.");

const buttonElem :Element | null=document.querySelector(".clickMe") as HTMLButtonElement;


const bodyElem:HTMLElement=document.body;

let isWhite:boolean=false;

buttonElem?.addEventListener('click',()=>{
  console.log("I am Clicked.");

  if(isWhite){
    bodyElem.style.backgroundColor="";
  }
  else{
    bodyElem.style.backgroundColor='#CEDEBD'
  }

  isWhite=!isWhite;
})

//The # means the color is written in Hexadecimal format (Hex color code).
// Structure:
// #RRGGBB
// Hex values go from:
// 00 → 255

// 2️⃣ Why 'red' becomes rgba(255,0,0,1)?
// Browsers convert colors internally to RGB or RGBA format.
// Example:
// red
// equals
// rgb(255,0,0)
// And sometimes DevTools shows:
// rgba(255,0,0,1)
// RGBA means:
// rgba(Red, Green, Blue, Alpha)
// Alpha = opacity
// Value	Meaning
// 1	fully visible
// 0.5	50% transparent
// 0	invisible
// Example:
// rgba(255,0,0,1)
// means
// red with 100% opacity
