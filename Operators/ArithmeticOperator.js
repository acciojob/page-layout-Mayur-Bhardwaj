// Arithmetic Operators:- +(Addition), -(Subtraction), *(Multiplication), /(Divivison), %(Modulus), **(Power)

a = 10;
b = 3;

console.log(a+b);   // 13
console.log(a-b);  // 7 
console.log(a*b);  // 30
console.log(a/b);  // 3.3333333333333335
console.log(a%b);  // 1


// ParsseInt --> The ParseInt() is used to remove the decimal in division.

quot = parseInt(a/b);
console.log(quot);   //3


x = -10;
y = -3;
ans = x%y;
console.log(ans);  // -1

// But the correct answer is 2 

// The JS ignore the -(minus) sign first divide the number and then they give the ddivident sign and put on it.