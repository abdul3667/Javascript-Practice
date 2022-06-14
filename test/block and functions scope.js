console.log('hello boss');


// let and const are the block scopes
// var is a function scope

// if(true){
//     var firstname = "Abdul";

// }
// console.log(firstname);

//  firstName = 'abdul';
function myApp(){
    if (true){
        var firstName = "Harshit";
        console.log(firstName);

    }

    if (true){
        var firstName = "Abdul";
        console.log(firstName);
    }


    console.log(firstName);
}

myApp();
