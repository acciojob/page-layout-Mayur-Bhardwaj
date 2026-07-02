// Armstrong number using Function

function countDigit(n){
  let count =0;
  while(n>0){
    let last = n%10;
    count++;
    n=parseInt(n/10);
  }
  return count;
}

// console.log(countDigit(34456)); // 5

function digitSum(n){
  let numberOfDigits = countDigit(n);
  let sum=0;
  while(n>0){
    let last = n%10;
    sum = sum + (last**numberOfDigits);
    n=parseInt(n/10);
  }
  // console.log(sum);
  return sum;
}

// digitSum()
let n=153
let sum = digitSum(n);
if(n==sum){
  console.log("Armstrong");
}
else{
  console.log("Not Armstrong");
}