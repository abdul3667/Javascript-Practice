console.log('hello this is every method');


const numbers = [6,8,2,6,78,66 ];


const ans = numbers.every( number => number%2 ===0);
console.log(ans);


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},

];

const answers = userCart.every(obj => obj.price <30000);
console.log(answers);








