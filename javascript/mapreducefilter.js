
// todo let  see for each method is not returend

const coding = ['js','python','c++','java','ruby']

coding.forEach((item) => {
    // console.log(item);
});

const value = coding.forEach((item) => {
    // console.log(item);
    return
});
//! console.log(value); this not work because for each method dosn't has acces of return value!!


// todo Filter method

const Mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  Mynums.filter((num)=> num>5)
// console.log(newNums);

// const newNums = Mynums.filter((num)=>{
//     return num>4            //todo return is very neccassary in scope 
// })
// console.log(newNums);

//? let see how process simlary conduction in for  each

const newNums =  []

Mynums.forEach((num)=>{
    if (num>5) {
        newNums.push(num)
    }
})
// console.log(newNums);

const book =  [
    {
        title:"book1", genre:'history',published:2000,edition:2007
    },
    {
        title:"book2", genre:'java',published:1788,edition:2004
    },
    {
        title:"book3", genre:'secince',published:2006,edition:20017
    },
    {
        title:"book4", genre:'history',published:2000,edition:2007
    },
    {
        title:"book5", genre:'js',published:2010,edition:2019
    },
    {
        title:"book6", genre:'python',published:2015,edition:2020
    },
    {
        title:"book7", genre:'civil',published:2011,edition:2021
    },
    {
        title:"book8", genre:'history',published:2005,edition:2007
    },
]
    
let userbooks = book.filter((bk)=>bk.edition===2007)
// console.log(userbooks);

userbooks = book.filter((bk)=> { 
    return bk.published >=2005 && bk.genre ==='history'
})
    console.log(userbooks);

    
  


