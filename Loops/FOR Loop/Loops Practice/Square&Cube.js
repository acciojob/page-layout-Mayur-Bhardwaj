// Sum of Squares and Sum of Cubes of Each Digit
// Problem Statement: You are given a positive integer N. Your task is to extract each digit of the number (without converting it into a string) and compute two values:

// Sum of the square of each digit
// Sum of the cube of each digit

// let n = 123;
// let sumOfSquare = 0;
// let sumOfCube = 0;

// for(let i=0; i<=n; i++){
//   sumOfSquare = sumOfSquare + i*i;
//   sumOfCube = sumOfCube + i*i*i;
// }

// console.log("Sum Of Square: ", sumOfSquare);
// console.log("Sum Of Cube: ", sumOfCube);

// Correct Code

let n = 123;
let sumOfSquare = 0;
let sumOfCube = 0;

while(n>0){
  let digit = n%10;
  // console.log(digit)
  sumOfSquare = sumOfSquare + digit*digit;
  sumOfCube = sumOfCube + digit*digit*digit;
  n= parseInt(n/10);
}
console.log("Sum Of Square is: ", sumOfSquare);
console.log("Sum Of Cube is: ", sumOfCube);
