console.log('hello world!');

// Param Destructuring

const obj = {
    name : 'Abdul',
    surname:'Makrani',
    age : 17,
};

function callObj({name, surname}){
    console.log(name);
    console.log(surname);
} 

callObj(obj);
