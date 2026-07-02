// separate even and odd in an array.

// let arr = [10,21,30,43,50,65];

// let even= [];
// let odd= [];
// for(let i=0; i<=arr.length-1; i++){
//   if(arr[i]%2==0){
//     // console.log(even);
//     even.push(arr[i]);
//     // even++;
//   }else{
//     odd.push(arr[i]);
//     // odd++;
//   }
// }
// console.log(even);
// console.log(odd);

// Another Way

let arr = [10,21,30,43,50,65];

let even= [];
let odd= [];

for(let t of arr){
  if(t%2 == 0){
    even.push(t);
  }else{
    odd.push(t);
  }
}

console.log(even);  // [ 10, 30, 50 ]
console.log(odd);  // [ 21, 43, 65 ]

