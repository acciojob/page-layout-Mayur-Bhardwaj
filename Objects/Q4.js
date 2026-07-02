//  Q7: .    Group Objects by Property
// const students = [
//   {name: "John", grade: "A"},
//   {name: "Jane", grade: "B"},
//   {name: "Bob", grade: "A"},
//   {name: "Alice", grade: "B"}
// ];
// Group students by grade
// Result: {A: ["John", "Bob"], B: ["Jane", "Alice"]}

 const students = [
  {name: "John", grade: "A"},
  {name: "Jane", grade: "B"},
  {name: "Bob", grade: "A"},
  {name: "Alice", grade: "B"}
];

for( let i in students){
  if("grade" === "A"){
    students.push(students[i]);
  }
}
console.log(students);