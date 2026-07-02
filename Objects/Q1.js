// Create an object {name, email, age} and rename the key name "full name".

let details = {
  "name" : "JavaScript",
  "email" : "js@gmail.com",
  "age" : 24 
}

details["FullName"] = details.name;
delete details.name;
console.log(details);

// Output:
// { email: 'js@gmail.com', age: 24, FullName: 'JavaScript' }