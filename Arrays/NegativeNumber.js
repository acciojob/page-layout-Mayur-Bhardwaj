// Write a function that returns the number of negative numbers count in an array.

let arr = [9,7,-4,23,-5,-5,-6];

let count = 0;
function countNegative(arr){
  for(let i=0; i<arr.length; i++){
      if(arr[i] < 0){  
        count++;
      }    
  }
  return count;
}

let result = countNegative(arr);
console.log(result); //4