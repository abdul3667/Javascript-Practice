console.log("hello world!");



 let array1 = ["item1", "item2"];


//let array2 = array1.slice(0).concat(["item3", "item4"]);
//let array2 = [].concat(array1).concat(["array3", "array4"]);

// new way 
// spread operator

let array2 = [...array1, "hello"];
array1.push(67);


console.log(array2===array1);
console.log(array1);
console.log(array2);