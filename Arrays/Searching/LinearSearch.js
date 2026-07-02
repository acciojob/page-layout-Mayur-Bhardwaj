// Found the element

// let arr = [10,20,30,40,50];
// let x = 40;

// for(let t of arr){
//   if(t == x){
//     console.log("Found");
//   }
//   else{
//     console.log("Not Found");
//   }
// }

// Output:
// Not Found
// Not Found
// Not Found
// Found
// Not Found

// Or

let arr = [10,20,30,40,50];
let x = 40;
let flag = false;

for(let t of arr){
  if(t == x){
    console.log("Found");
    flag = true;
    break;  // if not found then break the loop.
  }
}
if(flag == false){
    console.log("Not Found");
}

// Found