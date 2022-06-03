let marks = [67, 74,78,30];

let test1 = [90, true]
const mixed = [67, 'str', test1 ];

let check = mixed[2];
console.log(check[1]);
console.log(mixed[2]);


console.log(Array.isArray('hello'));
marks[1] = 'hello';
console.log(marks);

let el1 = marks[3];
console.log(el1);

let value = test1.indexOf(true);
console.log(value);
console.log(mixed);

//Mutating or Modifying Arrays
marks.push('hello');  //push the value at end
marks.unshift('hi');  //adjust the value at the start
marks.pop();   //delete the end index value
marks.shift();    //delete the value of index 0
marks.splice(1, 2);
marks.reverse();


let marks2 = [76, 98];
marks = marks.concat(marks2.reverse());

console.log(marks);

//Objects


let myObj = {
    'gh first'  : "ar",
    marks : [34,56],

}



console.log(myObj['gh first']);









