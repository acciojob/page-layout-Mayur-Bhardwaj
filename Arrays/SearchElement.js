// Write a function that search an element in an array and return index if the element is not print then just return -1.

let arr = [4,3,0,10,8,30];

function searchElement(arr, x){
  for(let i=0; i<arr.length; i++){
    if(arr[i] == x){
      return i;
    }
  }
  return -1;
}

let data = searchElement(arr, 0);
console.log(data); // 2

// let data = searchElement(arr, 5);
// console.log(data); //-1