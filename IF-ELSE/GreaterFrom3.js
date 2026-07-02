// Q - Take three number and find the greatest among them

let a = 10;
let b = 20;
let c = 30;

if(a>b && a>c){
  console.log(`${a} is Greater than ${b} and ${c}`);
} else if(b>a && b>c){
  console.log(`${b} is Greater than ${a} and ${c}`);
} else if (c>a && c>b){
  console.log(`${c} is Greater than ${b} and ${a}`);
}

// Output:- 
// 30 is Greater than 20 and 10
