

const userEmail = []

if (userEmail) {
    console.log("got it successed");
}else{
    console.log("invalid");
}
// falsy value

//  false ,0,-0,"",null ,undefined,BigInt,0n,NAN

// turethy value 
// "0",'false'," ",[],{},function(){}

// if (userEmail.length ===0) {
//     console.log("array is empty"); ///HOW TO FIND EMPTY ARRAY
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length===0) {
//     console.log("object is empty");
// }


// NULLISH COALESCING OPERATOR (??):NULL ,UNDEFINED

let val1;

// val1 = 4 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 19
// val1 = null ?? 100 ??200

// console.log(val1);

// Terniray operator

// condition ? true : false

const iceTanble = 2000
iceTanble <= 1000 ? console.log("less than 1000") : console.log("more than 1000");