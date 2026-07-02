// Count the Digits of a Number
// Problem Statement: You are given a positive integer N. Your task is to determine how many digits the number contains.

let n = 123;
let count = 0;
while(n>0){
  n = parseInt(n/10);
  count++;
}
console.log(count);