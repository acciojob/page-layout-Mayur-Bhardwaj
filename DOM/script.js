// Select an element in DOM

// let a = document.querySelector("h1");
// console.log(a); // <h1>Practice DOM</h1>

// Changing the HTML

// a.innerHTML = "Learn DOM"; // on screen shows Learn DOM

// Styling CSS

// a.style.color = "red"  //also write "Red" "RED"
// a.style.backgroundColor = "blue";

// Bulb On/ Off

const bulb = document.querySelector("#bulb");
const btn = document.querySelector("button");

let flag = 0;
btn.addEventListener(("click"), function(){
  if(flag === 0){
    bulb.style.backgroundColor = "yellow";
    flag = 1;
    btn.innerText = "OFF"
  }else{
    bulb.style.backgroundColor = "white";
    flag = 0;
   btn.innerText = "ON";
  }
});