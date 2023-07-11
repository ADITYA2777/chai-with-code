
// singleton 

// object.create
// object is liteals

const mySum = Symbol("key1")

const jsUser = {
    name: "adityajain",
    age: 23,
    [mySum]: "mykey1",
    mySum: "mykey1",
    "full name":"adityajshda",
    location: "jabalpur",
    email:"aditya@2555.com",
    isLoggedIn:false,
    LastLoginDays: ["mon","sat"]
}
// console.log(jsUser.age);
// console.log(  jsUser["age"]);
// console.log(  jsUser["full name"]);
// console.log( jsUser[mySum]);
// console.log( jsUser);

jsUser.email = "adityachat@.com";
// Object.freeze(jsUser)
jsUser.email = "adityacmoirewwqqq"
console.log(jsUser);

jsUser.greet = function(){
    console.log("hello js user");

}
jsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.email}`);

}
console.log(jsUser.greet());
console.log(jsUser.greetingTwo());


//ALWAYS WE USE . OPERATER JUST EXMAPLE = JSUER.EMAIL
// SOME UNQUE CASE WE USE [] =  console.log( jsUser[mySum]);


