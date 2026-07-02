// function reverseArray(arr, start, end){
//   // base case
//   if(start >= end) return;

//   // swap
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;

//   reverseArray(arr, start+1, end-1);
// }

// let arr = [1,2,3,4,5];
// reverseArray(arr, 0, arr.length-1);
// console.log(arr);

// // Output:
// // [ 5, 4, 3, 2, 1 ]

function factorial(n){
  if(n === 1) return 1;

  return n*factorial(n-1);
}
console.log(factorial(5));
