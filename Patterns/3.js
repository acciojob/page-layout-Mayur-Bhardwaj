//     *
//    **
//   ***
//  ****
// *****

let n=5; 
for(let i=1; i<=n; i++){
  let sp ="";
  let str = "";
  for(let space =1; space<=5-i; space++){
    sp = sp + " ";
  }
  for(let j=1; j<= i; j++){
    str = str + "*";
  }
  console.log(sp+str);
}