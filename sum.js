var x="sum.js file is executed";


function calculatesum(a, b) {
    const sum=a+b;
    console.log(sum);
}

//module.exports=calculatesum; // this will export the function to the file where it is required.

module.exports={x:x , calculatesum:calculatesum}; // this will export the function to the file where it is required.