// Array --> It is used to store multiple values.

let a = [10,20,30,40,50];
console.log(a); //[ 10, 20, 30, 40, 50 ]

let arr = [1, "Apple", 0.5, true,];
console.log(arr);  // [ 1, 'Apple', 0.5, true ]

console.log(arr[0]);  //1   [] --> this is called indexing

console.log(arr[90]);  //  undefined

// find index of last element

let arr1 = [1,2,34,5,6,7,8,33,44,4,2,11];

let length = arr1.length;
console.log(length);  //12
console.log(length-1);  // 11

let ar = [10,20,30,40,50];

for(let i=0; i<=ar.length-1; i++){
  console.log(ar[i], i);
}

// Output:
// 10 0
// 20 1
// 30 2
// 40 3
// 50 4

// Using while loop

console.log("*******************************");
let i=0;
while(i<=ar.length-1){
  console.log(i, ar[i]);
  i++;
}

// Output:
// 0 10
// 1 20
// 2 30
// 3 40
// 4 50