const names = 'Abdul';
const greeting = 'Good Morning';
console.log(greeting + ' ' + names + '!');

let html;
html = "<h1> this is the heading </h1>" + " " + "<p> this is the pARagraph </p>";

console.log(html);

html = html.concat(' this', ' hi');
console.log(html);

console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());


console.log(html[2]);  //strings work as a array of characters
console.log(html.indexOf('i'));
console.log(html.lastIndexOf('i'));
console.log(html.charAt(27));
console.log(html.substring(5,9));
console.log(html.slice(2, -9));
console.log(html.split("i"));

let test = html.replace("this","It")
console.log(test.replace("this","It"));




// Template Literal use

let fruit1 ='Orange';
let fruit2 ='Apple';
let myHtml = `Hello ${ fruit1}`
console.log(myHtml);








 