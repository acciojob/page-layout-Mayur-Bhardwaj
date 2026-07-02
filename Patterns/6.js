let n = 5; // no. of rows and cols we want
let num = 1;  // starting value
for(let i=0; i<n; i++){
  let row = ""; // empty string to store the current flow
  for(let j=0; j<n; j++){
    row = row + num + " ";
    num++;  // number increase for the next position
  }
  console.log(row);
}

// Output:
// 1 2 3 4 5 
// 6 7 8 9 10 
// 11 12 13 14 15 
// 16 17 18 19 20 
// 21 22 23 24 25 
