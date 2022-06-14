console.log("hello world!");



// Object Destructuring


const band = {
    bandName: "strings",
    famousSong: "Kashmir",
    year: 1968,
    hello: 90,

     
};

let {bandName : var1, famousSong, ...rest} = band;
console.log(var1);
console.log(rest);



//object inside array

const users = [
    {UserId: 1,  firstName: 'Abdul ', gender: 'male'},
    {UserId: 2,  firstName: 'rehman ', gender: 'male'},
    {UserId: 3,  firstName: 'Muneer ', gender: 'male'},
   
]
for(let user of users ){
    console.log(user.firstName)
}


//nested destructuring

// const [user1, user2, user3]  = users
// console.log(user1)

const [ {firstName : name}, , {gender}] = users
console.log(name, gender);


