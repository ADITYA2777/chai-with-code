

// for

for (let i = 0; i <20; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}


for (let i = 1; i <=10; i++) {
    // console.log(`outer loop value :${i}`);
    for (let A = 1; A <= 5; A++) {
        // console.log(`inner loop value ${A} and  inner loop value ${i}`);
        // console.log(i + "*" + A + "=" + i*A );
    }
    
}


const MyArray = ["flash","batman","superman"]
// console.log(MyArray.length);

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element);
    
}

for (let i = 1; i <=20; i++) {
  if (i == 5) {
    console.log("5 is detected");
    break // break what do break do all are end no exter change
  }  
//   console.log(i);  
}
for (let i = 1; i <=20; i++) {
  if (i == 5) {
    // console.log("5 is detected");
    continue // give a atlest one change to continue aur line 
  }  
//   console.log(i);  
}

// while
 let index = 0
while (index <= 10) {
    // console.log(`values of the indexs ${index}`);
    index = index + 2
}


let score = 11
do {
    console.log(`value of score is ${score}`);
    score++
} while (score <=10 );
