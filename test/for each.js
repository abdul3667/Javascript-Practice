// console.log('HELLO');


//for each method
// const numbers =  [1,2,3,4] ;

// function myFunc(number, index){
//     console.log(index, number);

// }

// numbers.forEach(function(number, index){  //first it passes the number and then the index
//     console.log(index, number);


// });


// const letsDo = [7,8,9,4]

// letsDo.forEach(function(number){
//     let result = number*2;
//     console.log(result) ;
// });


// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},


// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }


//testing


const func1 = num => {

    var check = num / 2;
    return check


};

function func2(callback){
    let val1 = 9*8;
    
    const check2 = (callback(val1));
    return check2

};




console.log(func2(func1));



  