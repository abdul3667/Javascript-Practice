console.log('hello world')

// function myFunc(a,b,...c){

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }


// myFunc(3,5,7,8,5,54)


let total = 0;
const addAll = function(...d){
    for (let num of d){
        total = total + num;

    } 
    return total;

}

console.log(addAll(1,2,9,89));

// default parameters

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a,b=7){
    return a+b;
}

const ans = addTwo(4,);
console.log(ans);
