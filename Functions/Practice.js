// q1:
// Write a function that takes your name as a parameter and prints "Hello <name>".

function userName(name){
    return `My name is ${name}`;
}

let uName = userName("Mayur Bhardwaj")
console.log(uName);

// Output:
// My name is Mayur Bhardwaj


//q2:
// Write a function that takes 2 numbers and prints their product.

function product2Number(a,b){
  let product = a*b;
  return product;
}

let result = product2Number(2,3);
console.log(`The Product of 2 number is ${result}`);

// Output:
// The Product of 2 number is 6

// q3:
// Write a function that takes 4 numbers and prints their product.

function product(w,x,y,z){
let prod = w*x*y*z;
return prod;
}

let res = product(2,3,4,5);
console.log(`The product of 4 number is ${res}`);

// Output:- 
// The product of 4 number is 120


//q4:
// Write a function named track_calls() that keeps track of how many times it has been called.
// track_calls() => called for 1 times
// track_calls() => called for 2 times
// track_calls() => called for 3 time 

let count = 0;

function track_calls() {
  count++;
  console.log(`track_calls() => called for ${count} times`);
}

track_calls();
track_calls();
track_calls(); 

// q5: Take a function with three paramters and return the sum of three paramters and print the product of all 3 in same function.

function sumAndProduct(a,b,c){

  let sum = a+b+c;
    console.log("Product of 3 is ", a*b*c);
  return sum;
}
let results = sumAndProduct(2,3,4);
console.log("Sum is", results);

// Output:
// Product of 3 is  24
// Sum is 9