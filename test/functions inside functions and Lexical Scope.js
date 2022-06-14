// function app(){
//     const myFunc = () =>{
//         console.log('hello myfunc');
//     }

//     const add = function(num1,num2){
//         console.log(num1);
//         return num1 + num2;
//     }

//     const multiply = (num1, num2 ) => num1*num2;
    
//     console.log('inside app');
//     myFunc();
//     console.log(add(4, 6));
//     console.log(multiply(2,3));

// }

// app()
// console.log(num1);

// Lexical scope

const myVar = 'hello';

function app(){
    const insideApp = () =>{
        const myFunc= () => {
            let myVar = 90;
            console.log("hello boss", myVar);

        }
        myFunc()

    }
    console.log(myVar);
    insideApp();

}
app();


