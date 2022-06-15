// console.log(00);


// reduce method


const numbers = [1,4,3,5];

const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator,'currentValue',currentValue);
    return accumulator + currentValue;
})  // we can also pass initial value here

console.log(sum,'SUM=>');


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)


console.log(totalAmount);
