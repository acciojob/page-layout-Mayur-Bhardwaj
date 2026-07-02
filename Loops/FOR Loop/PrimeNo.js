//  Check a number is prime or not.
// Prime no. has exactly 2 factor.

// let n= 8; 
// let count = 0;

// if(n==1){
//   console.log("1 is neither prime nor composite number.");
// }else if(n>1){
//   for(let i = 2; i<=n; i++){
//     if(n%i == 0){
//       count++;
//     }
//     if(count>=2){
//       console.log(`${n} is Prime Number.`);
//     }else{
//       console.log(`${n} is not Prime Number.`);
//     }
//   } 
// }

let n = 20;
let count =0;

for(let i=1; i<=n; i++){
  if(n%i == 0){
    count = count+1;
  }

}
if( count == 2){
  console.log("Its Prime");
}else{
  console.log("Not Prime")
}

// Output:
// Not Prime