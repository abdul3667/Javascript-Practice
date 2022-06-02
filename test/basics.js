//tut#1
//console.log

/*
console.log('Hello World!');
console.log(["Hello", 4, 4345]);
console.log({Name: "Abdul", Age: 17});
console.table({Name: "Abdul", Age: 17});
console.warn('this is a warning');

*/


//tut 2
// variables

/*

const names = 'Abdul rehman';    // we cannot change the value assigned to this variable later on. 

console.log(names);
{

    let names= "abdul";       //let somehow creates a type of a local variable and it can be changed but cannot be re declared
    names = 'AR';             // if we do this without line 22 it would have changed the global variable because we have not yet declared a local variable

    console.log(names);     // inside the block local variable will be printed but outside the block the value would be the same as the line 17.

}

console.log(names);


*/

// let has a limited scope while var has a global scope


//tut 3
// Data types

// Primitive Data Types
{
let primename = 'Abdul Rehman'
console.log('My name is ' + primename);
console.log('data type is '+ (typeof primename));




primename = 65
console.log('My name is ' + primename);
console.log('data type is '+ (typeof primename));


}
let primename = true
console.log('My name is ' + primename);
console.log('data type is '+ (typeof primename));


 primename = null
console.log('My name is ' + primename);
console.log('data type is '+ (typeof primename));



//reference data types

let myarr = [965,542,5,3,234];
console.log(myarr);
console.log('data type is '+ (typeof myarr));

// Object Literals

let stMarks = {
    harry: 67
}
console.log(stMarks);
console.log('data type is '+ (typeof stMarks));




