// print 1 to 5

// for(initialization; condition; increment/decrement)

let i;
for(i = 1; i<=5; i++){
  console.log(i);
}

// Output:-
// 1
// 2
// 3
// 4
// 5

// for(let i =1; i>=5; i=i+1){
//   console.log(i);
// }

for(let i=5; i>=1; i=i-1){
  console.log(i)
}

// Output:-
// 5
// 4
// 3
// 2
// 1

for(let i = 10; i>=1; i=i/2){
  console.log(i)
}
// Output:
// 10
// 5
// 2.5
// 1.25

for(let i =1; i<=5; i++){
  console.log(i);
}
console.log("#########");
for(let i =1; i<=5; i++){
  console.log(i);
}
console.log("#########");
for(let i =1; i<=5; i++){  // i value is increase by 1 but we can't see either is increase by 1 before or after.
  console.log(i);
}

// Output:-
// 1
// 2
// 3
// 4
// 5
// #########
// 1
// 2
// 3
// 4
// 5
// #########
// 1
// 2
// 3
// 4
// 5


x++;
// z=x++ ==> z=x=1 and x=x+1 =2
++y;
// z= ++y ==> y=y+1=2 and z=y=2