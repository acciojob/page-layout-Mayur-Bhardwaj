// Find HCF of two numbwrs (Highest Common Factor).

let a = 100;
let b = 20;
let hcf;

for(let i=1; i<=b; i++){
  if(a%i == 0 & b%i == 0){
    hcf = i;
  }
}
console.log(hcf);