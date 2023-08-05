

const promiseOne = new Promise((resolve, reject) => {
    //  do  a async task
    // Dbcall ,cryptography ,network call
    setTimeout(() => {
        console.log("async 1 task is complete");
        resolve()
    }, 1000);
});

promiseOne.then(function () {
    console.log("promise is consumed");
});

new Promise(function(resolve,reject) {
    setTimeout(function () {
        console.log("aysnc task 2 is completed ");
        resolve()
    },1000)
}).then(()=>{
    console.log("async is resolve");
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({userName:"adityajain",email:"aditya@example.com"})
    },2000)
})
promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
   let error = true
   if (!error) {
    resolve({userName:"aditya",password:"123"})
   }
   else{
    reject('ERROR: Somethink  went wrong')
   }
    },3000)
})
promiseFour
.then(function (user) {
    console.log(user);
     return user.userName
})
.then(function (userName) {
    console.log(userName);
})
.catch(function (err) {
    console.log(err);
})
.finally(() => console.log("this promise is either  reject or resolve "));


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = false
        if (!error) {
         resolve({userName:"javaScript",password:"123"})
        }
        else{
         reject('ERROR: js went wrong')
        }
         },4000)
     })

     async function consumePromseFive() {
        try {
            const respone = await promiseFive
        console.log(respone);
        } catch (error) {
            console.log(error);
        }
     }
     consumePromseFive()
