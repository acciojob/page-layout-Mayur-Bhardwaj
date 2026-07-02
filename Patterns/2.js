// *****
//  ****
//   ***
//    **
//     *

let n=5;
for(let i=1; i<=n; i++){
  let sp ="";
  let str = "";
  for(let space =1; space<=i-1; space++){
    sp = sp + " ";
  }
  for(let j=1; j<= n-i+1; j++){
    str = str + "*";
  }
  console.log(sp+str);
}