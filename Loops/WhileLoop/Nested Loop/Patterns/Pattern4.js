let x=1;

for(let repeat = 1; repeat<=3; repeat++){
  let str="";
  for(let i=1; i<=x; i++){
    str = str+"*";
  }
  console.log(str);
  x=x+2;
}

// Output:
// *
// ***
// *****

