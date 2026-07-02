// Find the max element from array.

// let arr = [1,2,3,4,5]; 
// let max = 0;
// for(let i=0; i<arr.length; i++){
//   if(arr[i] > max){
//     max = arr[i];
//   }
// }
// console.log(max);  //5

// Find the second largest element from the given array

// let arr = [1,2,3,4,5];
// let first = -Infinity;
// let second = -Infinity;

// for(let i=0; i<arr.length; i++){
//   if(arr[i] > first){
//     second = first;
//     first = arr[i];
//   }else if(arr[i] > second && arr[i] !== first){
//     second = arr[i]
//   }
// }
// console.log(second); //4

// Insert the element in the given array

// let arr = [1,2,3,4,5];
// let index = 3;
// let n = 6;

// for(let i= arr.length-1; i>=index; i--){
//   arr[i+1] = arr[i];
// }
// arr[index] = n;
// console.log(arr);

// Output:
// [ 1, 2, 3, 6, 4, 5 ]

// Delete the element from the given array

// let arr = [1,2,3,4,5];
// let index = 2;

// for(let i=index; i<=arr.length-1; i++){
//   arr[i] = arr[i+1];
// }
// arr.pop();
// console.log(arr);

// Output:
// [ 1, 2, 4, 5 ]

// Remove Duplicate Elements from the given array

// let arr = [1,2,1,3,2,4,5,3,6,4,5,6];
// let brr = [];

// for(let t of arr){
//   if(brr.indexOf(t) == -1){
//     brr.push(t);
//   }
// }
// console.log(brr);

// Output:
// [ 1, 2, 3, 4, 5, 6 ]

// Find the missing number form the given array

function missingNumber(arr){
  let n= arr.length+1;

  let expectedSum = (n*(n+1))/2;
  let actualSum = 0;

  for(let i=0; i<arr.length; i++){
    actualSum = actualSum + arr[i];
  }
  return expectedSum-actualSum;
}
let arr = [1,2,4,5];
console.log(missingNumber(arr));  //3