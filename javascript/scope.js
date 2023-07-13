
;

// {}> scope bolo jata hai 
// var c =200;
// golbal scope
let a = 300
if (true) {
    
// let a = 10;
// const b = 120;
// var c = 103
// console.log("inner",a);//bolck scope

}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){

    const username = "aditya"
    function two (){
        const website = "chai wit code"
        // console.log(username);
    }
//    console.log(website);
   two()
}
// one()
console.log(addone(5));
function addone (num){
    return num +1
}
// addone(5)

// experince function
// console.log(addTwo(5))
const addTwo = function(num){
    return num +2
}
addTwo()
