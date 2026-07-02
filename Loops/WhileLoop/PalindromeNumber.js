// Palindrome Number 

let n = 121;
let temp=n;
let rev=0;

while(n>0){
  let last_digit = n%10; 
  rev = rev*10 + last_digit;
  n = parseInt(n/10);
}

console.log(rev);

if(rev == temp){
  console.log("Palindrome Number");
}else{
  console.log("Not Palindrome");
}

// Output:
// Palindrome Number