// let n=123
// Step 1:- Find sum of square of each digit == > 1^2 + 2^2 + 3^2 = 14
// ans for step 1 => n+step1 ans ==> 123 + 14 => 137

// Step 2:- sum of cube of each digit => 1^3 + 3^3 + 7^3 => x
// Step 2:- 137 + Step2 => 137+x => 178

// Step 3:- 1^4 + 3^4 + 7^4 => sum

// n->123,  1^2 + 2^2 + 3^2 = 14, 137 -> 1^3 + 3^3 + 7^3 + 137,    480 --> 4^4 + 8^4 + 0^0

function  sumOfDigits(n, power){
  let sum = 0;
  while(n>0){
    let last = n%10;
    sum = sum + (last**power);
    n = parseInt(n/10);
  }
  return sum;
}

let n = 123;

let square = sumOfDigits(n, 2);
console.log(square);  //14
let step1 = n + square;  // 123 + 14 = 137
let cube = sumOfDigits(step1,3);  // 371
let step2 = step1+cube;  // 137 + 371 = 508
let power4 = sumOfDigits(step2,4); // (508,4)  ==> 5^4+ 0^4+ 8^4  
console.log(power4);  // 4721