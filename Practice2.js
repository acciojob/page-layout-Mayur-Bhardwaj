// Find Square of a each array element

// let arr = [1,2,3,4,5];
// let ans = arr.map(square);
// console.log(ans);

// function square(value, index){
//   return value*value;
// }
// output:
// [ 1, 4, 9, 16, 25 ]

// Give even number
// let arr = [1,2,3,4,5];
// let res = arr.filter(val => val%2 === 0);
// console.log(res);
// // Output:
// [ 2, 4 ]

// Sum of number -- Here we use reduce because they give ans in single value

// let arr = [1,2,3,4,5];
// let res = arr.reduce(display,0);
// console.log(res);

// function display(Sum,val){
//   return Sum + val;
// }
// Output:   15

// Multiply of an array

// let arr = [1,2,3,4,5];
// let res = arr.reduce(display,1);
// console.log(res);

// function display(mul, val){
//   return mul*val;
// }

// Output:-  120

// Remove duplicate from an array

// let arr = [1,2,2,3,2,1,4,4,5,1];
// let S = new Set();
// for(let t of arr){
//   S.add(t)
// }
// let brr = [];
// for(let t of S){
//   brr.push(t);
// }
// console.log(brr);

// Output: [ 1, 2, 3, 4, 5 ]

// Convert array into set 

// let arr = [1,2,3,4,5];
// let S = new Set(arr);
// console.log(S);
// Output:  Set(5) { 1, 2, 3, 4, 5 }

// Convert Set into String
// let str = "Madam";
// let s = new Set(str);
// console.log(s);    
// Output: Set(4) { 'M', 'a', 'd', 'm' }

// Binary Seaarch

// function binarySearch(arr, target){
//   let low = 0;
//   let high = arr.length;

//   while(low <= high){
//     let mid = Math.floor((low + high)/2);

//     if(arr[mid] == target){
//       return mid;
//     } else if(arr[mid] <= target){
//       low = mid+1;
//     }else{
//       high = mid-1;
//     }
//   }
//   return -1;
// }
// let arr = [2,4,6,9,15];
// console.log(binarySearch(arr,4)); 
// Output: 1

// Bubble Sort

// function bubbleSort(arr){
//   let n = arr.length;

//   for(let i=0; i<=n-1; i++){
//     for(let j=0; j<=n-i-1; j++){
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//     return arr;
//   }
// }
// // let arr = [2,1,3,5,4,2];
// console.log(bubbleSort([2,1,3,5,4]));

// Output: [ 1, 2, 3, 4, 5 ]

// Reverse Array in Recursion

// function revArray(arr, start, end){
//   // base case
//   if(start >= end) return ;

//   // swap
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;

//   revArray(arr, start+1, end-1);
// }
// let arr = [1,2,3,4,5];
// revArray(arr,0, arr.length-1);
// console.log(arr);

// Output: [ 5, 4, 3, 2, 1 ]

// if n = 2
// 1 2 
// 3 4 

// let n=2; 
// let num = 1;
// for(let i=1; i<=n; i++){
//   let row = "";
//   for(let j=1; j<=n; j++){
//     row = row + num + " ";
//       num++;
//   }
//   console.log(row);
// }

// Prime number uisng recursion

// function primeNumber(n, i=2){

//   // base case
//   if(n<2) return false;
//   if(i === n) return true;
//   if(n%i === 0) return false;
//    return primeNumber(n, i+1);
// }
// console.log(primeNumber(87));  // true

// factorial using recursion

// function factorial(n){
//   // base case
//   if(n === 1) return 1;

//   // recursive call
//   return n*factorial(n-1);
// }
// console.log(factorial(7));  //5040

// Fibonacci Series

// function Fibonacci(n){
//   // base case
//   if(n === 0) return 0;
//   if(n === 1) return 1;

//   return Fibonacci(n-1) + Fibonacci(n-2);
// }
// function printFibonacci(n){
//   for(let i=0; i<n; i++){
//     console.log(Fibonacci(i));
//   }
// }
// printFibonacci(10);

// Output: 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34

// EX: - n = 2
// 1 2 
// 3 4

// let n = 2;
// let num = 1;
// for(let i=0; i<n; i++){
//   let row = "";
//   for(let j=0; j<n; j++){
//     row = row + num + " ";
//     num++;
//   }
//   console.log(row);
// }
// Output: 1 2 
// 3 4 

// Print number uisng recursion

// function printNumber(n){
//   // base case
//   if(n === 0) return ;

//   printNumber(n-1);
//   console.log(n);
// }
// printNumber(5);
// // Output:
// 1
// 2
// 3
// 4
// 5

// Print Reverese Number using Recursion

// function reverseNumber(n){
//   // base case
//   if(n === 0) return ;
//   console.log(n);
//   reverseNumber(n-1);
// }
// reverseNumber(5);
// // Output:
// 5
// 4
// 3
// 2
// 1

// Factorial Number using recursion

// function factorial(n){
//   // base case 
//   if(n === 0) return 1;

//   return n*factorial(n-1);
// }
// console.log(factorial(5)); 

// Output: 120

// Prime Number

// function primeNumber(n, i=2){
  
//   if(n<2) return false;

//   if(i === n) return true;

//   if(n%i === 0) return false;

//   return primeNumber(n, i+1);
// }
// console.log(primeNumber(5));

// Output: true

// Fibonacci Series

// function fibonacci(n){
//   // base case
//   if(n === 0) return 0;
//   if(n === 1) return 1;

//   return fibonacci(n-1) + fibonacci(n-2);
// }
// function printFibonacci(n){
//   for(let i=0; i<n; i++){
//     console.log(fibonacci(i));
//   }
// }
// printFibonacci(6);

// // Output:
// 0
// 1
// 1
// 2
// 3
// 5

// Reverse an array

// function revArray(arr, start, end){
//   // base case
//   if(start >= end) return ;

//   // swap
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;

//   revArray(arr, start+1, end-1);
// }
// let arr = [1,2,3,4,5];
// revArray(arr, 0, arr.length-1);
// console.log(arr);

// Output: [ 5, 4, 3, 2, 1 ]

// Count duplicate from an array

// let arr = [1,1,2,3,4,3,2,4,4,5,5,5,5,5];

// let map = new Map();

// for(let t of arr){
//   map.set(t, (map.get(t) || 0)+1);
// }
// console.log(map);

// Output:- Map(5) { 1 => 2, 2 => 2, 3 => 2, 4 => 3, 5 => 5 }

// Remove duplicates from an array

// let arr = [1,1,2,2,3,3,4,5,5];

// let S = new Set();

// for(let t of arr){
//   S.add(t);
// }
// // console.log(S);  remove the duplicates but they come in set

// let brr = [];
// for(let t of S){
//   brr.push(t);
// }
// console.log(brr);

// Output: [ 1, 2, 3, 4, 5 ]

// Binary Search

// function binarySearch(arr, target){
//   let low = 0;
//   let high = arr.length;

//   while(low<= high){
//     let mid = Math.floor((low+high)/2);
//     if(arr[mid] === target){
//       return mid;
//     } else if(arr[mid] <= target){
//       low = mid+1;
//     } else{
//       high = mid-1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([2,3,4,5,6],4));

// Bubble Sort

// function bubbleSort(arr){
//   let n = arr.length;
//   for(let i=0; i<n-1; i++){
//     for(let j=0; j<n-i-1; j++){
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([2,3,1,5,6,4,5]));

// Conver array into set

// let arr = [1,2,3,4,5];
// let S = new Set(arr);
// console.log(S);

// Convert string into Set
// let str = "man";
// let s = new Set(str);
// console.log(s);
// console.log([...s].join(""));

// Map example find the square of every element

// let arr = [1,2,3,4,5];
// let ans = arr.map(square);
// console.log(ans);

// function square(val){
//   return val*val;
// }
// Output: [ 1, 4, 9, 16, 25 ]

// Using ForEach method

// let arr = [1,2,3,4,5];
// let ans = arr.forEach((value) =>{
//   console.log(value*value);
// });
// Output:
// 1
// 4
// 9
// 16
// 25

// Find even number

// let arr = [1,2,3,4,5];
// let ans = arr.filter(val => val%2 === 0);
// console.log(ans);

// Output: [2,4]

// Find odd number 

// let arr = [1,2,3,4,5];
// let ans = arr.filter((val) => val%2 !== 0);
// console.log(ans);

// Output: [ 1, 3, 5 ]

// Find the first even number
// let arr = [1,2,3,4,5];
// let ans = arr.find((val) => val%2 === 0);
// console.log(ans);
// Output: 2

// Find Sum of an array.

// let arr = [1,2,3,4,5];
// let ans = arr.reduce(display,0);
// console.log(ans);

// function display(Sum,val){
//   return Sum + val;
// }
// Output: 15

// Finf multiply of an array.

// let arr = [1,2,3,4,5];
// let ans = arr.reduce(display,1);
// console.log(ans);

// function display(mul, val){
//   return mul*val;
// }

// Output: 120

// Insertion Sort

function insertionSort(arr){
  let n = arr.length;

  for(let i=1; i<n; i++){
    let current = arr[i];
    let j = i-1;

    while(j>=0 && arr[j] > current){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current
  }
  return arr;
}
console.log(insertionSort([7,6,5,9,3,1]));

// Output:  [ 1, 3, 5, 6, 7, 9 ]
