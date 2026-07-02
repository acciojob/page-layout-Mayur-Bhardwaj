// // Print the straight value

// let n = 1254;
// // print like 1,2,5,4
// // n=4521;
// let rev=0;

// while(n>0){
//   let last_digit = n%10;
//   rev = rev*10+last_digit;
//   n=parseInt(n/10);
// }

// console.log(rev);  //4521
// n=rev;   //4521

// while(n>0){
//   let last_digit = n%10;
//   console.log(last_digit);
//   n = parseInt(n/10);
// }

// Output:-
// 4521
// 1
// 2
// 5
// 4


// Second Approach

let n1 = 5678;
let count = 0;

while(n1>0){
  let last = n1%10;
  count++;
  n=parseInt(n1/10);
}
console.log(count);