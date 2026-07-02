// Calculate the Second Larest element from the array

function secondLargest(arr, n){
  let first = -Infinity;
  let second = -Infinity;

  for(let i=0; i<arr.length; i++){
    if(arr[i] > first){
    second = first;
    first = arr[i];
  } else if(arr[i] > second && arr[i] !== first){
    second = arr[i];
  }
  }
  return second
}

let arr = [12,4,5,64,22,90,67];
let result = secondLargest(arr)
console.log(result);  //67