console.log("sum.js file is executed");


function calculatesum(a, b) {
    const sum=a+b;
    console.log(sum);
}

module.exports=calculatesum; // this will export the function to the file where it is required.