// You are asked to help in filtering special numbers from a range.

// Given two integers a and b (where a < b), print all numbers in this range (inclusive) that are:

// •	Divisible by 3
// •	Divisible by 7
// •	Not divisible by 5
// For example, if the input range is 10 to 50, the output should be: 21, 42 (since 21 is divisible by 3 and 7 but not by 5, and 42 is also divisible by 3 and 7 but not by 5).

// Write a JavaScript function to solve this problem. You can use loops and conditional statements to achieve this.

// let a; 
// let b;

// if(a<b){
// 	for(let i=a; i<=b; i++){
// 		if(a%3==0 && a%7==0 && a%5!=0){
// 			console.log(i);
// 		}
// 	}
// }

let a = 10;
let b = 50;

for (let i = a; i <= b; i++) {
  if (i % 3 === 0 && i % 7 === 0 && i % 5 !== 0) {
    console.log(i);
  }
}

// Output:
// 21
// 42