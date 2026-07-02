// Enter number of electricity units consumed and calculate amount to pay, based on the rules below
// For first 50 units, Rs: 1/unit
// For next 100 units, Rs.2/unit
// For next 100 units, Rs. 3/ units
// For units above 250, Rs.4/units
// For all bills above 150 rupees additional surcharge of 20% of total bill amount is added.

// Constraints:
// 0 <= number of units <= 1000

// Input:
// An integer/float denoting the number of electrical units consumed
// Output:
// An integer/ float denoting the electrical charge.

// Example:
// Input:
// 120

// Output:
// 228

// Explanation :
// Total number of units = 120
// First 50 units bill = 501 = 50
// Next 70 units bill = 702 = 140 (Rs. 2 will be charged for units 51-150)
// Total bill without additional charge = 140 + 50 = 190
// Additional 20% charge = 38
// Total bill with additional charge = 228


let units = 300;
console.log("Total units is",units);
let amt = 0;

if(units<=50){
  amt = units*1;
} else if(units<=150){
amt = 50*1 + (units - 50)*2;
}else if(units<=250){
  amt = 50*1 + 100*2 + (units-150)*3;
} else if(units>250){
  amt = 50*1 + 100*2 + 100*3 + (units-250)*4; 
}
let surcharge =0;
if(units>150){
  surcharge = amt*0.2;
  let totalBill = surcharge+amt;
  console.log(`Your Electricity Bill is ${totalBill}`);
}

// Output:-
// Total units is 220
// Your Electricity Bill is 552

// Output:-
// Total units is 300
// Your Electricity Bill is 900