
const numbs =[1,2,3,4,5,6,7,8,9,10]

let userNumber1 = numbs.map((Num)=> Num+10)
// console.log(userNumber1);


let userNumber2 = numbs.map((Num)=>{return Num+10})
// console.log(userNumber2);

let userNumber = numbs
                    .map((Num)=>Num *10)
                    .map((Num)=>Num +10)
                    .filter((Num)=>Num>=50)
console.log(userNumber);
