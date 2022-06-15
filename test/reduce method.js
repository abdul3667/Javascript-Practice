// console.log(00);


// reduce method


const numbers = [1,4,3,5];

const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator,'currentValue',currentValue);
    return accumulator + currentValue;
})

console.log(sum,'SUM=>');
