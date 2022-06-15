// console.log('this is splice method');


// // splice method 
// // start , delete , insert

// const myArray = ['item1', 'item2', 'item3'];


// // delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// // insert 
// myArray.splice(1, 0,'inserted item');
// console.log(myArray);

// //insert and delete 


const n =[1,2,1,7,5,1,2]

n.length=2
console.log(n);

function anagram(str1, str2){
    let arr1 = Array.from(str1);
 
    let arr2 = Array.from(str2);
  

    arr1.sort();
    arr2.sort();
    console.log(arr1)
    console.log(arr2)
    // return arr1 === arr2;
    return arr1.every((char, index) => {
        if(char === arr2[index]){
            return true;

        }else{
            return false;
        }
    })


   


}

const check = anagram('care', 'race');
console.log(check);


// const check = anagram('care', 'race');
// console.log(check);




// // let val = n.toString();
// // console.log(val);

// let lenghts = toString(n).length;
// console.log(lenghts);


// let val = String(n);
// console.log(val);




