// a,b,c
// check if triangle is valid or not
// if valid --> equilateral, isosceles, scalen


let a = 40;
let b = 40;
let c = 100;

if(a+b+c == 180 && a>0 && b>0 && c>0){     //check triangle is valid or not
  console.log("Valid Triangle.");
  if(a==b && b==c){
    console.log("Equilateral Triangle");
  }else if(a==b || b==c || c==a){
    console.log("IsoSceles Trianlge");
  }else{
    console.log("Scalen Triangle");
  }
} 
else{
  console.log("Not Valid Triangle.");
}

// Output:- 
// Valid Triangle.
// IsoSceles Trianlge