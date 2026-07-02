// Find missing number of merge two sorted array.

// function findMissing(arr1, arr2){
//   let i=0, j=0;
//   let missing = [];
  
//   while(i<arr1.length && j<arr2.length){
//     if(arr1[i] == arr2[j]){
//       i++;
//       j++;
//     } else{
//       missing.push(arr1[i]);
//       i++;
//     }
//   }
//   // remaining elements
//   while(i<arr1.length){
//     missing.push(arr1[i]);
//     i++;
//   }
//   return missing;
// }

// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,2,4,6];
// console.log(findMissing(arr1,arr2));

// Output:

// [ 3, 5 ]


// In Unsorted Array

function findMissing(arr1, arr2){
  let missing = [];
  
  for(let i=0; i<arr1.length; i++){
    if(!arr2.includes(arr1[i])){
      missing.push(arr1[i]);
    }
  }
  return missing;
}
let arr1 = [ 3,2, 5,4,1,6];
let arr2 = [ 1,2,4,5];
console.log(findMissing(arr1, arr2));

// Output:
// HEllkfk

[ 3, 6 ]