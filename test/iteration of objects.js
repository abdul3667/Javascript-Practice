console.log('hello world!');
const person = {
    name: 'abdul',
    age: 17,
    ages: 90,
}

//for in loop
//object.keys

// for(let key in person){
//     console.log(key,":" , person[keys]);
// }

// console.log(Object.keys(person));
// let val = Array.isArray(Object.keys(person))
// console.log(val);

for(let check of Object.keys(person)){
    if (check === 'age'){
        break;                      //done some extra work here not required
    
    }
    
    console.log(check);
}

