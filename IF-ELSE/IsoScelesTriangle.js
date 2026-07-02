// IsoScelse Triangle

let angle1 = 50;
let angle2 = 50;
let angle3 = 80;

if(angle1+angle2+angle3 == 180 && angle1>0 && angle2>0 &&angle3>0){
  console.log("Valid Triangle");
  if(angle1 == angle2 || angle2 == angle3 || angle3 == angle1)
    console.log("Isosceles Triangle");
  }
else{
  console.log("Not Valid Triangle");
}

// Output:-
// Valid Triangle
// Isosceles Triangle