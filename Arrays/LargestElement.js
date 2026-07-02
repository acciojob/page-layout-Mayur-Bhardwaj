// Claculate the Largest Element in an array

function largestElement(arr){
  let max = arr[0];
  for(let i=0; i< arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max;
}

let arr = [12,45,2,6,98,65,32];
let result = largestElement(arr);
console.log(result);  //98