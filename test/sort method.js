console.log('hello');

// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125




//sort

// const userNames = ['harshit', 'abcd', 'mohit', 'nitish']
// userNames.sort();
// console.log (userNames)

// const numbers = [5,9,123,5,8000];
// numbers.sort((a,b) => b-a);
// console.log(numbers);


// const number = [5,9,123,5,8000];
// numbers.sort((a,b) => b-a);
// console.log(number);



//prc e loow to high high to low

const products = [
    {productId: 1, productName: 'a1', price: 300},
    {productId: 2, productName: 'a2', price: 400},
    {productId: 3, productName: 'a3', price: 1000},
]


// //low to high

// const check = products.sort((a,b) => {
//     return b.price - a.price;
// })

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});

console.log(highToLow)


// console.log (check);


const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

users.sort((a,b)=>{
    if (a.firstName > b.firstName){
        return 1;
    }else{
        return -1
    }
});

console.log (users);


