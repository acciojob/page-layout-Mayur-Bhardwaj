// Print till 2 digit after decimal

let n = 123.4566778;

let newNo = n*100;
console.log(parseInt(newNo)); //12345
console.log(parseInt(newNo)/100); //123.45

// toFixed convrt the number into string. And in toFixed we set till 2 digit then they will roundOff the value.