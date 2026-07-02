// Unary Operator --> ++, --

let a = 10;
console.log(a);  //10
let z = a++;  //Post-Increment

console.log(a); //11
console.log(z); //10

let b = 20;
let x = ++b;
console.log(b);  //21
console.log(x);  //21

// Decrement

let c = 0;
let d = --c;

// c = c-1
// d = c

console.log(c);  //-1
console.log(d); //-1

let data = 5;
console.log(data++); //5
console.log(++data); //7

let val = 10;
let res = (a++) + (++a) + (a--);

console.log(val);
console.log(res);

let w = 10;
let asdf= (a++) + (a+1) - (++a) + (--a);

console.log(w); //11
console.log(asdf); //21

let a1 = 10;
let z1 = a++; //11
console.log(z1);
console.log(a1)