// var a = 10;  // global scope

// for(i=1; i<=1; i++){
//   console.log("inner 1", a);  // inner 1 10

//   var a = 100;
//   console.log("inner 2",a); // inner 2 100
// }

// console.log("Outer",a); // Outer 100


var a = 100 // global

function hello(){
  console.log("inner 1",a);  // inner 1 undefinedOuter Loop 100

 
  var a = 500;
  console.log("inner 2",a);  // inner 2 500

}

hello();

console.log("Outer Loop",a);  // Outer Loop 100
