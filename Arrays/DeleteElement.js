// Delete an element from the given array after given array

let arr = [10,20,30,40,50];

let index = 3;

for(let i=index; i<=arr.length-1; i++){
  arr[i] = arr[i+1];
}
arr.pop();  // to remove an undefined at last.
console.log(arr);

// Output: [ 10, 20, 30, 50 ]
