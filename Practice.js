// Factorial using Recursion

// function factorial(n){
//   // base case
//   if( n === 1) return 1;

//   // recursive call

//   return n*factorial(n-1);
// }
// console.log(factorial(5));  //120

// Prime number using Recursion

// function isPrime(n, i=2){
//   // base case
//   if(n<2) return false;

//   if(i === n) return true;

//   if(n%i === 0) return false;

//   return isPrime(n, i+1);
// }
// console.log(isPrime(5));  // true

// Fibonacci Series.

// function fibonaci(n){
//   // base case
//   if(n === 0) return 0;
//   if(n === 1) return 1;

//   return fibonaci(n-1) + fibonaci(n-2);
// }
// function printFibonacci(n){
//   for(let i=0; i<n; i++){
//     console.log(fibonaci(i));
//   }
// }
// printFibonacci(5);

// Reverse an array using recursion

// function reverseArray(arr, start, end){
//   // base case
//   if(start >= end) return;

//   // swap
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;

//   return reverseArray(arr, start+1, end-1);
// }
// let arr = [1,2,3,4,5];
// reverseArray(arr, 0, arr.length-1);
// console.log(arr);  //[ 5, 4, 3, 2, 1 ]

// Binary Search

// function binarySearch(arr, target){
//   let low = 0;
//   let high = arr.length-1;

//   while(low <= high){
//     let mid = Math.floor((low + high)/2);

//     if(arr[mid] == target){
//       return mid;
//     }
//     else if(arr[mid] < target){
//       low = mid + 1;
//     } else{
//       high = mid - 1;
//     }
//   }
//   return -1;
// }
// let arr = [ 1,2,3,4,5];
// console.log(binarySearch(arr,5));

// Pattern  if n = 2
// 1 2 
// 3 4

// let n = 2;
// let num = 1;
// for(let i=1; i<=n; i++){
//   let row = " ";
//   for(let j=1; j<=n; j++){
//     row = row + num + " ";
//     num ++;
//   }
//   console.log(row);
// }

// Pattern  if n = 4 print even
//  2 4 6 8 
//  10 12 14 16
//  18 20 22 24
//  26 28 30 32

// let n = 4;
// let num = 2;
// for(let i=1; i<=n; i++){
//   let row = " ";
//   for(let j=1; j<=n; j++){
//     row = row + num + " ";
//     num = num + 2;
//   }
//   console.log(row);
// }

// let n = 4;
// let num = 1;
// for(let i=1; i<=n; i++){
//   let row = " ";
//   for(let j=1; j<=n; j++){
//     row = row + num + " ";
//     num = num + 2;
//   }
//   console.log(row);
// }
// Output:
//  1 3 5 7 
//  9 11 13 15 
//  17 19 21 23 
//  25 27 29 31 

// Bubble Sort

// function bubbleSort(arr){
//   let n = arr.length;

//   for(let i=0; i<n-1; i++){
//     for(let j=0; j<n-i-1; j++){
//       if(arr[j] > arr[j+1]){
//         // swap
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//       return arr;

// }
// console.log(bubbleSort([5,6,3,4,1]));    // [ 1, 3, 4, 5, 6 ]

// function bubbleSort(arr){
//   let n = arr.length;

//   for(let i=0; i<n-1; i++){
//     for(let j=0; j<n-i-1; j++){
//       // swap
//      if(arr[j] > arr[j+1]){
//        let temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//      }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([5,4,6,2,1,3]));

