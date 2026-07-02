// *****

let str ="";
for(let i=1; i<=5; i++){
  str = str+"*";
}
console.log(str);

// Output:-
// *****


// 12345


let str2 = "";
for(let i=1; i<=5; i++){
  str2 = str2 + i;
}
console.log(str2)

// Output:
// 12345


// Print all even number from 1-10, separated by "," .

let str3 = "";
for(let i=1; i<=10; i++){
  if(i%2==0){
    str3 = str3 + i +","
  }
}
console.log(str3);

// Output:
// 2,4,6,8,10,