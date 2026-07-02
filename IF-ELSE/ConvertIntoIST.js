let hr = 16;
let min = 45;

// Output is 4:45 PM

// Test Cases

// 20:40 -->  8:40 PM
// 10:34 --> 10:34 AM
// 0:45  --> 12 :45 AM
// 12:56 --> 12:56 PM


if(hr == 0){
  console.log(`${12} : ${min} AM`);
} 
else if (hr < 12){
  console.log(`${hr} : ${min} AM `);
} else if(hr > 12){
  console.log(`${12-hr} : ${min} PM`);
} else if (hr == 12){
  console.log(`${hr}: ${min} PM`);
}
