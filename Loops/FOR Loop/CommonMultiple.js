// Print first 5 common multiple of a and b.

let a = 10;
let b = 30;

// minimum multiple of a&b is 30

// for(let i = b; i<=500; i++){
//   if(i%a == 0 & i%b == 0){
//     console.log(i);
//   }
// }

// Output:
// 30
// 60
// 90
// 120
// 150
// 180
// 210
// 240
// 270
// 300
// 330
// 360
// 390
// 420
// 450
// 480

//  5 multiple
// let count = 0;
// for(let i = b; i<=500; i++){
//   if(i%a == 0 && i%b == 0){
//     count++;
//     console.log(i, count);
//   }

//   if(count == 5){
//     break;
//   }
// }

// Output:
// 30 1
// 60 2
// 90 3
// 120 4
// 150 5


// If don't know the last where we go. 

let count = 0;
for(let i = a; i<=b; i++){
  if(i%a == 0 && i%b == 0){
    count++;
    console.log(i, count);
  }

  if(count == 5){
    break;
  }
}