// Print index all the search element if not found return -1.

// let arr = [10,20,30,40,10,20,30];
// let flag = false;  //write because if "if" condition is not true
// let x = 10;

// for(let i=0; i<=arr.length-1; i++){
//   if(arr[i] == x){
//     console.log(i);
//     flag = true;
//   }
// }
// if(flag == false){  // if(!flag)
//   console.log(-1); 
// }

// Output:
// 0
// 4

// If we want in an array


let arr = [10,20,30,40,10,20,30];
// let flag = false;  //write because if condition is not true
let x = 10;
let indexArray = [];

for(let i=0; i<=arr.length-1; i++){
  if(arr[i] == x){
  indexArray.push(i);
  }
}
if(indexArray.length == 0){  // if(!flag)
  console.log(-1); 
}
else{
  console.log(indexArray);
}

// [ 0, 4 ]
