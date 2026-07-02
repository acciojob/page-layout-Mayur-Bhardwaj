// Write a prograam that takes a number of days as input & converts it into years, months & remaining days.
// Assume:- 1yr = 365 days, 1 month = 30 days, O/p:- X years, Y month, Z days.

let days = 800;

let year = parseInt(days/365);  // 2

let remainingDays = days%365;  //70

let month = parseInt(remainingDays/30);  // 70/30 --> 2

let day = remainingDays%30;  // 10

console.log(`${year} Years, ${month} month, ${day} days.`);

// Output:-
// 2 Years, 2 month, 10 days.
