let score = "aditya"

//console.log(typeof score);
//.log(typeof (score));

let valueInNumber= Number(score)
// e.log(typeof valueInNumber);
// console.log( valueInNumber);consol


//"33" =>33 
//"33abc" =>nan
//true =>1, flase =>0

let isloogedIN = "addd"

let loggedIN = Boolean(isloogedIN)
//console.log(loggedIN);

//1 =?true ,0 =>flase
//"" =>flase
//"aditya" => true

let  someNumber = 54

let stringNumber = String(someNumber)
// console.log( typeof stringNumber);
//*************opertaions **************/


let value = 2
let negativevalue = -value
// console.log(negativevalue);

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id ===anotherID);

const BigNumber = 114141214555673n


//Reference )(non-primitive)

// Array ,Object ,function


const array = ['aditya','akshay']

let obj = {
    name:'aditya',
    age:23
}

let useFun = function(){
    console.log("HELLO/WORLD");
}
useFun()

///////////stack and heap///////
// stack => primitive , heap => non-primitive

let myYoutube = "adityajain"

let anotherName = myYoutube
anotherName = "akshay"


console.log(myYoutube);
console.log(anotherName);
