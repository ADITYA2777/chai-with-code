

const user = {
    Username:"adityajain",
    price:999,
    
    WelcomeMessage: function () {
        console.log(`${this.Username},wlecome to websites`);
        // console.log(this);
    } 
}
// user.WelcomeMessage()
user.Username ="sam"
// user.WelcomeMessage()
// console.log(this);

function ome (){
  let username ="asd"
    console.log( this.Username);
}
let om = () => {
  let username ="asd"
    console.log( this);
}
// om()

// const addTwo = (num1,num2) =>{
// return num1 + num2
// }

// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2)=>({name:"aditya"})

console.log(addTwo(addTwo.name))



