// Take 2 number, find all common factor.

 
//   }
// }

let a = 45;  // max factor 1-45
let b = 60;  // max factor 1-60  
// minimum factor is a.

// Number that divide both 45 & 60.

for(let i=1; i<=b; i++){
  if(a%i == 0 && b%i == 0){
      console.log(i);     
}}

  
// Output:-
// 1
// 3
// 5
// 15


// If we find first lowest factor

  // for(let i=1; i<=b; i++){
  // if(a%i == 0 && b%i == 0){
  //     console.log(i);
  //     break;
  // }}
  // Output:-   1
    



