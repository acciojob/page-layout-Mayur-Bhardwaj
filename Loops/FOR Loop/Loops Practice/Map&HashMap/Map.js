let arr = [10, 3, 44 ,5, 4, 3, 44];

let sum = 7;

let map = new Map();

for(let t of arr){
  map.set(t,1)
}
console.log(map);  // Map(5) { 10 => 1, 3 => 1, 44 => 1, 5 => 1, 4 => 1 }

for(let t of arr){

  let firstNumber = t;
  let secondNumber = sum - firstNumber;

  if(map.has(secondNumber) == true){
    console.log(firstNumber, secondNumber);
  }
}