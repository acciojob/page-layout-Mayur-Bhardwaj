let a1 = [1,2,3,4];
let a2 = [5,6,7,8];

let a3 = [];

a3.push(...a1, ...a2);

console.log(a3);

// Output:
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

let arr1 = [1,2,3,4,11,12];
let arr2 = [5,6,7,8,9,10];

let arr3 = [];

for(let i=0; i<arr1.length; i++){
  arr3.push(arr1[i]);
}
for(let i=0; i<arr2.length; i++){
  arr3.push(arr2[i]);
}

console.log(arr3);

// Output:
// [
//    1,  2, 3, 4, 11,
//   12,  5, 6, 7,  8,
//    9, 10
// ]