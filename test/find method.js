console.log('hello world lets find something');

const myArray = ['hello','catt', 'dog', 'lion'];


function letsFind(string){
    return string.length ===3
;}

const anotherVar = myArray.find(letsFind);
console.log(anotherVar);


const users = [
    {userId : 1, userName : "abdul"},
    {userId : 2, userName : "abdur"},
    {userId : 3, userName : "rehman"},
    {userId : 4, userName : "muneer"},
];

const check = users.find(obj => {
    return obj.userId ===2;


});

console.log(check.userId+  '  '+  check.userName);


