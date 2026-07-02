// Swap 2 variables.

let a = 10;
let b = 20;

console.log("Before Swapping", a,b); // Before Swapping 10 20

let temp = a;  //10
a = b;  //20
b = temp;  // 10

console.log("After Swapping",a,b);  // After Swapping 20 10

// Without using 3rd variable

let a1 = 100;
let b1 = 200;
console.log("Before Swapping 2 :- ", a1,b1);   // Before Swapping 2 :-  100 200
 a1 = a1+b1;  // 300
 b1 = a1-b1;  // 100 (300-200)
 a1 = a1-b1; // 200 (300-100)
 console.log("After Swapping 2:- ", a1,b1);  //  After Swapping 2:-  200 100

