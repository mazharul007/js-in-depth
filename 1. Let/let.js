// let can't be redeclared 
// let is block scope variable  {}

let x = 10;

if(true){
    let x = 2;
    console.log(x); // result: 2
}
console.log(x); // result: 10

// note: variable declared with let keyword is also hoisted top but don't set the default value as the way var set value as undefined


// hoisting example with var 
stackName = "front-end dev";

var stackName;
console.log(stackName);


// hoisting example with let 
frameWorkName = "Angular 12";

let frameWorkName;
console.log(frameWorkName); // this is going to throw us reference error as let do not set the default value the way var set the value as undefined


