// Insert the element at the given index

// let arr = [1,2,3,4,5];

// let index = 3;
// let n = 35;

// for(let i = arr.length-1; i>=index; i--){
//     arr[i+1] = arr[i];
// }
// arr[index] = n;
// console.log(arr);  // [ 1, 2, 3, 35, 4, 5 ]

// Delete the element at the given index.

// let arr = [1,2,3,4,5];
// let index = 2;

// for(let i=index; i<=arr.length-1; i++){
//   arr[i] = arr[i+1];
// }
// arr.pop();
// console.log(arr); //[ 1, 2, 4, 5 ]

// Print the alternate elements 

// let arr = [1,2,3,4,5];
// // arr.splice(3,1);
// // console.log(arr);
// let res = [];
// for(let i=0; i<arr.length; i=i+2){
//   res[res.length] = arr[i];
// }
//   console.log(res);

// Remove Duplicate Elements

// let arr = [1,1,2,3,4,4,2,3,5,5];
// let brr = [];
// for(let t of arr){
//   if(brr.indexOf(t) === -1){
//     brr.push(t);
//   }
// }
// console.log(brr);  // [ 1, 2, 3, 4, 5 ]

// Reverse Number
// let n = 12345;
// let rev = 0;
// while(n>0){
//   let last = n%10;
//   rev = rev*10 + last;
//   n = parseInt(n/10);
// }
// console.log(rev);  //54321

// Palindrome Number

// let n = 121;
// let rev = 0;
// let originalNumber = n;
// while(n>0){
//   let last = n%10;
//   rev = rev*10 + last;
//   n = parseInt(n/10);
// }
// if(originalNumber === rev){
//   console.log("Palindrome Number");
// }else{
//   console.log("Not Palindrome Number");
// }

// let n = 1210;
// let reverseNumber = 0;
// let originalNumber = n;
// while(n>0){
//   let last = n%10;
//   reverseNumber = reverseNumber*10 + last;
//   n = parseInt(n/10);
// }
// if(reverseNumber === originalNumber){
//   console.log("Palindrome Number");
// } else{
//   console.log("Not Palindrome Number");
// }

// Armstrong Number

// let n = 153;
// let sum = 0;
// let temp = n;

// while(temp>0){
//   let last = temp%10;
//   sum = sum + last*last*last;
//   temp = parseInt(temp/10);
// }
// if(sum === n){
//   console.log("Armstrong Number"); // Armstrong Number
// }else{
//   console.log("Not Armstrong");
// }

// Prime Number
// let n = 7;
// let isPrime = true;
// if(n === 1) console.log("1 is neithe Prime nor Composite Number");
// else if(n>1){
//   for(let i=2; i<=n/2; i++){
//     if(n%i === 0){
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime){
//     console.log("Prime Number");
//   }else{
//     console.log("Not Prime Number");
//   }
// }
// else{
//   console.log("Negative number is not prime number");
// }

// Reverse an array
// let arr = [1,2,3,4,5];
// // arr.reverse();
// // console.log(arr); // [ 5, 4, 3, 2, 1 ]
// // or 
// let rev = [];
// for(let i = arr.length-1; i>=0; i--){
//   rev.push(arr[i])
// }
// console.log(rev); //[ 5, 4, 3, 2, 1 ]

// Palindrome String

// let str = "madam";
// let rev = [];
// for(let i= str.length-1; i>=0; i--){
//   rev = rev + str[i];
// }
// if(str === rev){
//   console.log("Palindrome String");
// }else{
//   console.log("Not Palindrome String");  // Palindrome String
// }

// Copy object values into 3rd obj
// let obj1 = {
//   a:1,
//   b:2
// }
// let obj2 = {
//   c:3,
//   d:4
// }
// let obj3 = {}
// for(let t in obj1){
//   obj3[t] = obj1[t];
// }
// for(let t in obj2){
//   obj3[t] = obj2[t];
// }
// console.log(obj3); //{ a: 1, b: 2, c: 3, d: 4 }

// Without using 3rd variable
// let obj1 = {
//   a:1,
//   b:2
// }
// let obj2 = {
//   c:3,
//   d:4
// }
// console.log(Object.assign(obj1, obj2)); //{ a: 1, b: 2, c: 3, d: 4 }

// Print only duplicate numbers
// let arr = [1,1,2,2,3,4,5,1,4,5,];
// let duplicate = arr.filter((item,index) =>
//     arr.indexOf(item) !== index
// );
// console.log([... new Set(duplicate)]);

// Find last indexOf element
// function lastIndexOf(arr, element, startIndex){
//   for(let i = arr.length-1; i>=0; i--){
//     if(arr[i] === element){
//       return i
//     }
//   }
//   return -1;
// }
// let arr = [1,1,2,3,3,4,5,4,1,2,3,1,5];
// console.log(lastIndexOf(arr,1,1));

// Find Second Last index.
// let arr = [1,1,2,3,3,4,5,4,1,2,3,1,5];
// let last = arr.lastIndexOf(1);
// console.log(last); //11
// let secondLast = arr.lastIndexOf(1, last-1);
// console.log(secondLast);

// Subarray
// let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length; i++){
//   let subArray = [];
//   for(let j=i; j<arr.length; j++){
//     subArray = subArray + arr[j] + " ";
//     console.log(subArray)
//   }
// }

// let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length; i++){
//   let subArray = [];
//   for(let j=i; j<arr.length; j++){
//     subArray = subArray + arr[j] + " ";
//     console.log(subArray)
//   }
// }
// Output
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 2 
// 2 3 
// 2 3 4 
// 2 3 4 5 
// 3 
// 3 4 
// 3 4 5 
// 4 
// 4 5 
// 5 

// Print SubString
// let str = "madam";
// for(let i=0; i<str.length; i++){
// let subStr = "";
//   for(let j=i; j<str.length; j++){
    
//     subStr = subStr + str[j]
//     console.log(subStr)
//   }
// }

// Print SubString
// let str = "abcde";
// for(let i=0; i<str.length; i++){
//   let subStr = "";
//   for(let j=i; j<str.length; j++){
//     subStr = subStr + str[j] + " ";
//     console.log(subStr);
//   }
// }

// // Bubble Sort
// function BubbleSort(arr){
//   let n = arr.length;
//   for(let i=0; i<n-1; i++){
//     for(let j=0; j<n-i-1; j++){
//       // swap
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(BubbleSort[5,3,8,4,2]);

// Convert Array into String
// let arr = [1,2,3,4,5];
// let str = arr.join(" ");
// console.log(str)

let str = "ram, shyam";
let arr = str.split(",");
console.log(arr)