// Reverse A Number

// function revNumber(n){
  // base case
//   if(n === 0) return 0;

   // recursive call
//   console.log(n);
//  return revNumber(n-1);
// }
// revNumber(5);
// Output:-
// 5
// 4
// 3
// 2
// 1

// Reverse And Straingh Number

// function revAndStraight(n){
   // base case
//   if(n === 0) return ;

//   console.log(n);
//   revAndStraight(n-1);
//   console.log(n);
// }
// revAndStraight(5);
// 5
// 4
// 3
// 2
// 1
// 1
// 2
// 3
// 4
// 5

// Factorial Number

// function Factorial(n){
   // base case
//   if(n === 0) return 1;
//   if(n === 1) return 1;

//   return n*Factorial(n-1);
// }
// console.log(Factorial(5)); //120

// Prime Number

// function isPrime(n, i=2){
//   if(n < 2) return false;

//   if(i === n) return true;

//   if(n%i === 0) return false;

//   return isPrime(n, i+1);
// }
// console.log(isPrime(7)); // true

// Fibonacci Series

// function Fibonacci(n){
//   if(n === 0) return 0;
//   if(n === 1) return 1;

//   return Fibonacci(n-1) + Fibonacci(n-2);
// }

// function printFibonacci(n){
//   for(let i=0; i<n; i++){
//     console.log(Fibonacci(i));
//   }
// }
// printFibonacci(7);

// Output:
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// Sum of Digits

// function sumOfDigitss(n){
// base case
//   if(n === 0) return 0;

//   return (n%10)+sumOfDigitss(parseInt(n/10));
// }
// console.log(sumOfDigitss(1234));

// Reverse Array using Recursion

// function revArray(arr, start, end){
  // base case
//   if(start >= end) return ;

  // swap
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;

//   revArray(arr, start+1, end-1);
// }
// let arr = [1,2,3,4,5];
// revArray(arr, 0, arr.length-1);
// console.log(arr);  // [ 5, 4, 3, 2, 1 ]

// Pattern Print
// 1 2      if n = 2
// 3 4

// let n = 4;
// let num = 1;

// for(let i=0; i<n; i++){

//   let row = "";
//   for(let j=0; j<n; j++){
//     row = row + num + " ";
//      num++;
//   }
//   console.log(row);
// }

// Remove Duplicates.
// let arr = [1,1,2,3,3,1,4,5,4];
// let s = new Set();
// for(let t of arr){
//   s.add(t);
// }
// let brr = [];
// for(let t of s){
//   brr.push(t);
// }
// console.log(brr);  // [ 1, 2, 3, 4, 5 ]

// For Odd Number

// let n = 4;
// let num = 1;
// for(let i=0; i<n; i++){
//   let row = "";
//   for(let j=0; j<n; j++){
//     row = row + num + " ";
//     num = num + 2;
//   }
//   console.log(row);
// }

// 1 3 5 7 
// 9 11 13 15 
// 17 19 21 23 
// 25 27 29 31 

// For Even Number

// let n = 4;
// let num = 2;
// for(let i=0; i<n; i++){
//   let row = "";
//   for(let j=0; j<n; j++){
//     row = row + num + " ";
//     num = num + 2;
//   }
//   console.log(row);
// }

// Output:
// 2 4 6 8 
// 10 12 14 16 
// 18 20 22 24 
// 26 28 30 32 

// let n = 5;
// for(let i=1; i<=n; i++){
//   let str = " ";
//   let sp = " ";
//   for(let space=1; space<=5-i; space++){
//     sp = sp + " ";
//   }
//   for(let j=1; j<=i; j++){
//     str = str + "*";
//   }
//   console.log(sp + str);
// }


// Output:
  //     *
  //    **
  //   ***
  //  ****
  // *****

//   let n = 5;
//   for(let i=1; i<=n; i++){
//     let str = " ";
//     for(let j=1; j<= 6-i; j++){
//       str = str + "*";
//     }
//     console.log(str);
// }

// Output:
//  *****
//  ****
//  ***
//  **
//  *

// let n = 5;

// for(let i=1; i<=n; i++){
//   let str = " ";
//   for(let j=1; j<=i; j++){
//     str = str + "1 ";
//   }
//   console.log(str);
// }

// Output:
//  1 
//  1 1 
//  1 1 1 
//  1 1 1 1 
//  1 1 1 1 1 

let n = 5;
for(let i=1; i<=n; i++){
  let str = "";
  let sp = "";
  for(let space=1; space<=i-1 ; space++){
    sp = sp + " ";
  }
  for(let j=1; j<= n-i+1; j++){
    str = str + (n-i-j+2);
  }
  console.log(sp + str);
}

// Output:
// *****
//  ****
//   ***
//    **
//     *
