

Array
const Myarr = [1,2,3,4,5]

const MyHero = ['aditya','akshay']

const MYArr2 = new Array(1,2,3,4,5,)
console.log(Myarr[1])
;

array method
Myarr.push(6)
Myarr.push(7)
Myarr.pop()

Myarr.unshift(9)
const NewArr =Myarr.join()
console.log( typeof NewArr);

slice , splice

const Myarr = [1,2,3,4,5];

const A1 = Myarr.slice(1,3)
console.log(Myarr);
console.log( "A",A1);

console.log("b",Myarr);

const A2 = Myarr.splice(1,3)
console.log("c",Myarr);
console.log(A2);
