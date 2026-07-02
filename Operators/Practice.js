// Take 2 number a and b and find its decimal part.

let a = 10;
let b = 3;
let res = a/b;  //3.333333335
let integerPart = parseInt(res);  //3
let decimalPart = res-integerPart;

console.log(`The Decimal of ${a} & ${b} is: `,decimalPart);  // The Decimal of 10 & 3 is:  0.3333333333333335

// Take a 2 digit number and find its last digit.

let no = 56;
let data = no%10;

console.log(`The last digit of ${no} is: ${data}`);  // The last digit of 56 is: 6

// Take a 2 digit number and find its first digit.

let no2 = 67;
let data2 = parseInt(no2/10);

console.log(`The First Digit of ${no2} is: ${data2}`);    // The First Digit of 67 is: 6


// or
// no = lastDigit*10 + First Digit
// FirstDigit = (no- LastDigit)/10

let number = 89;
let lastDigit = number%10;
let firstDigit = (number-lastDigit)/10;
console.log(`The First Digit of ${number} is ${firstDigit} & Last Digit is ${lastDigit}`);  // The First Digit of 89 is 8 & Last Digit is 9

// Take a 3 digit number and find its first digit.

let value = 189;
let ld = value%10;  //9
let fd = parseInt(value/100);   //1
// let f = (value-ld)/10;
console.log(fd);
let last = parseInt(value/10); //18
let last2  = last%10;  // 8
console.log(`The First Digit is ${fd} and Second Digit is ${last2} and Last Digit is ${ld}.`);  
// The First Digit is 1 and Second Digit is 8 and Last Digit is 9.





