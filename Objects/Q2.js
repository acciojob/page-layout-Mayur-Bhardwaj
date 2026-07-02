// Q2: Take two object and combione both  without using spread  or Object assign.

let obj1 = {
  "name" : "ABC",
  "age"  : 40
}

let obj2 = {
  "name" : "DEF",
  "age"  : 27
}

let obj3 = {}

for(let k1 in obj1){
  let key = k1;
  let value = obj1[k1]

  obj3[key] = value;
}

for(let k2 in obj2){
  obj3[k2] = obj2[k2]
}

console.log(obj3);
