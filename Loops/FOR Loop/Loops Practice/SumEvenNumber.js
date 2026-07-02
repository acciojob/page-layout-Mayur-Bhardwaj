// Problem 1: Sum of the First N Even Numbers
// let n=10;
// let sum =0;
// for(let i=0; i<=n; i++){
//   if(i%2 == 0){
//     sum = sum + i;
//   }
// }
// console.log(sum);

// If the problem says “sum of the first N even numbers” (not up to N),

let n = 5;
let sum = 0;

for(let i=1; i<=n; i++){
  sum = sum + 2*i;
}
console.log(sum);