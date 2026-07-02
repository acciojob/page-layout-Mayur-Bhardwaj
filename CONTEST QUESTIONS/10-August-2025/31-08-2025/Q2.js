// You are a software developer working for a fintech company that provides services for online banking. One of the features of the company's mobile application is to detect whether a given account number is a palindrome or not. A palindrome number is a number that remains the same when its digits are reversed. For example, 12321 is a palindrome, but 1234 is not.

// Your task is to write a JavaScript code that takes a positive integer N as input and checks whether it is a palindrome number or not. The code should print "Palindrome" if the number is a palindrome, and "Not Palindrome" otherwise.

let n=121;
let original_no = n;
let rev = 0;

while(n>0){
  let last = n%10;
  rev = rev*10 + last;
  n= parseInt(n/10);
}

if(rev === original_no){
  console.log("Palidrome");
}else{
    console.log("Not Palidrome");

}

// Output:
// Palidrome