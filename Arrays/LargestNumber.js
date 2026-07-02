// Write a function that returns the largest element in an array.

function largestElement(arr){
  let max = arr[0] ;
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]>max){
      max = arr[i];
    }
  }
  return max;
}

let arr = [1,4,7,8,45,3,22,-8,66,-54,33];
let res = largestElement(arr)
console.log(arr);