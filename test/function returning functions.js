console.log('hello boss!');



function myFunc(){
    function hello(){
        console.log('Hello world');

    }

    return hello;
}

const ans = myFunc();
ans();
