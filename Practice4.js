// Print name using SetInterval 5 times

// let x = setInterval(()=>{
//   console.log("Mayur Bhardwaj");
// },1000);
// let count = 0;
// for(let i=0; i<x.length; x++){
//   if(count === 5){
//     clearInterval();
    
//   // console.log(x);
//   count++;
// }
// }

// let id = clearInterval(x);
// console.log(id);

// Promise
// let p = new Promise((res, rej) ={

// })
// function promise(){
//   return new Promise((res, rej) =>{
//     let foodReady = false;

//     if(foodReady == true){
//       return res
//     } else{
//       return rej 
//     }
//   });
// }
// promise.then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log("Error", err);
// });


// Async And Await

// const data = async (req, res) => {
//   const result = fetch('https://jsonplaceholder.typicode.com/todos/1');
// }

// async function  getUsers() {
  // try{
//     let res = await fetch("https://jsonplaceholder.typicode.com/users/5");
//     let data = await res.json();
//     console.log(data);
//   }
//   catch(err){
//     console.log("Error", err);
//   }
// }
// getUsers();

async function getAllUsers(){
  try{
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await res.json();
    console.log(data);
  } catch(err){
    console.log("Error",err);
  }
}
getAllUsers();