// Remove the duplicate elements from the given array

let arr = [10,20,10,30,40,20,10,50,40,50,30];
let brr = [];

for(let t of arr){
  if(brr.indexOf(t) == -1){
    brr.push(t)
  }
}
console.log(brr);

// Output:
// [ 10, 20, 30, 40, 50 ]

