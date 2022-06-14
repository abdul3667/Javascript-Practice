console.log('hello world!');


// function singHappyBirthday(){
//     console.log('happy birthday to you...');
// }
// singHappyBirthday();


// function sumThreeNumbers(num1, num2, num3){
//     return num1 + num2 + num3
// }

// console.log (sumThreeNumbers(2,4,6));



// isEven
// input : 1 number 
// output : true , false 

// function isEven(number){
//     return number % 2 ===0;
// }

// console.log(isEven(5));


// function 
// input : string 
// output: firstCharacter 

function firstChar(anyString){
    return anyString[0].toUpperCase();
}

console.log(firstChar('abdul Rehman' ));


// function 
// input : array, target (number)
// output: index of target if target present in array 



function target(array1, target){
    for(let i= 0; i< array1.length; i++){
        if (array1[i]===89){
            return "target is present ";

        }
    }
    return -1;
}

let array1 = [56,89,90];
console.log(target(array1, 90))



// function expression

const firstChar2 = function(anyString){
    return anyString[anyString.length-1].toUpperCase();
}

console.log(firstChar2('abdul Rehman' ));


