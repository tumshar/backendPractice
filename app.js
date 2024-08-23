require('./demo.js'); // this file will run first, calling another file

var name="node project";
console.log(name);

var a=11; var b=1;
console.log(a-b);

// console.log(global);
// console.log(this); // this is empty object , will not give global object












// if you write window, this, self, frames in browser console, it will give global object which is different from nodejs global object