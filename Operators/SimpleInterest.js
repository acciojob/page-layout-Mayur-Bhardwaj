// Calculate the SI, SI = (P*R*T)/100

p = 1000;
r = 20;
t = 2;

SI = (p*r*t)/100;

console.log(`The Principle is : ${p}`);  // The Principle is : 1000
console.log(`The Rate is : ${r}`);  // The Rate is : 20
console.log(`The Time is : ${t}`);  // The Time is : 2
console.log("The Simple Interest is: ",SI);   // The Simple Interest is:  400

// Calculate Comppound Interest

amt = p*(1+r/100)**t;
CI = amt - p;
console.log("The Compound Interest is: ", CI);   //  The Compound Interest is:  440

