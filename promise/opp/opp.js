
const user = {
    userName:"aditya",
    loginCount:"7",
    signedIn:"true",

    getUserDetaials: function () {
    // console.log("got user detaials ");
    console.log(`signed:${this.loginCount}`);
    console.log(this);
    }
}
// console.log(user.userName);
// console.log(user.getUserDetaials());
// console.log(this);
// console.log(this);


function User(userName,loginCount,signedIn) {
   this.userName = userName //left side vale wo varaiable or jo right side vale wo apn pass kae
   this.loginCount = loginCount //left side vale wo varaiable or jo right side vale wo apn pass kae
   this.signedIn = signedIn //left side vale wo varaiable or jo right side vale wo apn pass kae

   return this
}

// const userOne = User("aditya",12,true)
// const userTwo = User("akshay",10,false)

const userOne = new User("aditya",12,true)
const userTwo = new User("akshay",10,false)
console.log(userOne);



