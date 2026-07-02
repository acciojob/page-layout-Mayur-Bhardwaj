function factorial(n){
  let fact = 1;
  for(let i=1; i<=n; i++){
    fact = fact*i;
  }
  // console.log(fact);
  return fact;
}
// factorial(5);

let a = 5;
let b = 10;

let ans = factorial(a)/(factorial(b)*factorial(a-b));
console.log(ans);

// Output:
// 120
