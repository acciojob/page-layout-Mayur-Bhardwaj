// Take a number and print its even factors.



  let n = 106;
  for(let i = 1; i<=n; i++){
    if(n%i == 0 && i%2 == 0){       // n%i == 0 is for find the factors.
      console.log("Even Factor is",i);
    }
  }


  // Output:
//   Even Factor is 2
//   Even Factor is 106


// Using while Loop

let n1 = 100;
let j = 1; 

while(j<=n1){
  if(n1%j==0 && j%2 == 0){
    if(j==3){
      break;
    }
    console.log(j);
  }
}





// Take a number and display all it digits , 345 --> 3, 4, 5.

