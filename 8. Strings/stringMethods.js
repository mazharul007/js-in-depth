// string methods: 

// slice , substring, substr 
// notes: strings are immutable : string cannot be changed, only replaced

let str = "Apple, Banana, Kiwi";

console.log(str.slice(0,5)); // here 0 is the start and end should be 5 and it will return Apple 
console.log(str.slice(-4,-2));

console.log(str.substring(0,5)); // don't except negative value

console.log(str.substr(0,5));

console.log(str.replace("Apple", "Mango")); // it doesn't change the main string its just return a new string also given parameter is case sensitive

console.log(str.toUpperCase());


let strTwo = "         Naumy";

console.log(strTwo.trim());

console.log(str.charAt(4));

console.log(str.charCodeAt("l"));

console.log(str[0]);

console.log(str.split(","));

// string search operations: 

let newStr = "Hello from MARS";
console.log(newStr.indexOf('MARS', 8));
console.log(newStr.lastIndexOf('from', 6));

