
//todo for of loop

// ["","",""]


// const arr = [1,2,3,4,5]
// for (const  num of arr) {
//     console.log(num);
// }

// const grettings = "hello aditya"

// for (const greet of grettings) {
//     console.log(`each one is ${greet}`);
// }

// todo Map

const map = new  Map()
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"franch")
// console.log(map);


for (const [ad,ak] of map) {
    // console.log(ad ,"=" ,ak);
}

// ? let  be use object and try for of loop

let obj ={
    game:"nfs",
    game2:"gta"
}
// ! for (const [key,value] of object) { inncoret form hai 
//     console.log(key,value);
// }

// todo let take for in 

let oobject ={
    js:'javascript',
    cpp:'c++',
    rb:'rub bay'
    
}
for (const key in oobject) {
    // console.log(`${key} shortcut of is ${oobject[key]}`);
}

// todo array in for in

const arry = [1,2,3,4,5]

for (const key in arry) {
//    console.log(arry[key]);
}


const map1 = new  Map()
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"franch")

for (const key in map1) {
//    console.log(`${key} it is fullform ${map1[key]}`);
//    console.log(key);

//   ! using key is not use in map because map is not itreated 
}

// todo foreach


const coding = ['js','python','c++','java','ruby']

coding.forEach(function (items){
    // console.log(items);
})
coding.forEach( (value)=>{
    // console.log(value);
})

function printme (value){
    // console.log(value);
}

coding.forEach(printme)


coding.forEach((val,index,arr)=>{
// console.log(val,index,arr);
})

const myobj = [
    {
        langaugename :"javascript",
        langaugefile: "js"
    },
   
    {
        langaugename :"java",
        langaugefile: "java",
    },
    {
        langaugename :"paython",
        langaugefile: "py",
    },
];

myobj.forEach((items)=>{
// console.log(items.langaugename);
console.log(items.langaugefile);
})


