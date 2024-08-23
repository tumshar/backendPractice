require('./demo.js'); // this file will run first, calling another file
require('./sum.js'); // here we expected that the function will get executed but it will not.
const obj=require('./sum.js'); // this will execute the function

var name="node project";
console.log(name);

var a=11; var b=1;
//console.log(a-b);

//calculatesum(a,b);
// console.log(global);
// console.log(this); // this is empty object , will not give global object

obj.calculatesum(a,b); // calculate
console.log(obj.x); // var x will be printed











// if you write window, this, self, frames in browser console, it will give global object which is different from nodejs global object