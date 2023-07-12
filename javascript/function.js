

function addTwoNumber(number1 , number2) {
    console.log(number1+number2);
}
// addTwoNumber(3,5)

// addTwoNumber ko bolta hai reference
// ()is ko bolta hai  Excuted
// (3,5) ARUGMENT
// (number1,number2) parameter


function addTwoNumber(number1 , number2) {
 
    // let result = number1 + number2
    return number1 + number2
}
const result = addTwoNumber(3,5)
// console.log("result",result);

function loginUserMessage(username="akki" ){
   if (!username) {
    
    console.log("plz enter ur username");
  return
}
    return`${username} just logged in`
}

// console.log(loginUserMessage("aditya"));
// console.log(loginUserMessage(""));

function calculateCartPrice (val1,val2,...num1){ //rest operater
   return num1
}
// console.log(calculateCartPrice(200,330,20000,10000));

const MyNewArray  = [200,44,555,6666]

function returnSecondValue(getarray){
    return getarray[1]

}
// console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([2000,333,444,5555,666]));
