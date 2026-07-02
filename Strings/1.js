// // Strings: In JavaScript, a string is a primitive data type used to represent sequences of characters (letters, numbers, or symbols). 

// // 1. Declaration & Quotes
// // There are three primary ways to define a string in JavaScript:
// // Single Quotes (' '): const str = 'Hello';
// // Double Quotes (" "): const str = "World";
// // Template Literals (Backticks ` `): Introduced in ES6, these allow for:
// // Interpolation: Embed variables using ${variableName}.
// // Multiline Strings: Preserve line breaks without escape characters.

// // Remember these rules in Strings in js:
// // 1. Always Reassign: Since strings are immutable, always use str = str.method().
// // 2. Watch the Case: Strings and methods in JS are almost always case-sensitive.


// // Methods:

// // let str = "Hello World";
// // console.log(str.length); //11

// // Indexing

// // console.log(str[2]); //l
// // console.log(str[6]); //W

// console.log(str.charAt(2)); //l
// console.log(str.charAt(10)); //d

// console.log(str.toUpperCase());  // HELLO WORLD
// console.log(str.toLocaleLowerCase()); //hello world
// console.log(str.toLowerCase()); //hello world
// console.log(str.toLocaleUpperCase()); // HELLO WORLD

// //  toUpperCase()
// // Standard Rule: Converts characters to uppercase based on the default Unicode case mappings.
// // toLocaleUpperCase()
// // Locale Sensitive: Converts characters based on the specific rules of a given locale (language and region).

// console.log(str.slice(1,4)); //ell
// console.log(str.includes("H"));  //true
// console.log(str.includes("D"));  //false     --> 	Checks if string contains a value (returns true/false).

// console.log(str.indexOf("o")); //4
// console.log(str.indexOf("z"));  //-1
// console.log(str.indexOf("W"));  //6
// console.log(str.indexOf(" "));  //5


// let string = "    Ram     ";
// console.log(string);  //     Ram     they also takes the space from the starting and ending.
// console.log(string.trim()); //Ram   --> they remove the space from the starting and ending.

// let str2 = "Js Learning";
// console.log(str2);
// str2 = str2.replace("Js","JavaScript");
// console.log(str2);

// // Output:
// // Js Learning
// // JavaScript Learning


// reverse of a string.

let str = "Hello";
let reverse = "";
for(let i=str.length-1; i>=0; i--){
  reverse = reverse + str[i];
}
console.log(reverse);