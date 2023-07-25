
const form = document.querySelector('form')
//  this usecase will give by empty
form.addEventListener('submit',function (e) {
    e.preventDefault();
 const height =parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const results = document.querySelector('#results')

 if (height === ""|| height < 0 || isNaN(height)) {
    results.innerHTML=`Please give me a valid height ${height}`
 }
 else if (weight === ""|| weight < 0 || isNaN(weight)) {
    results.innerHTML=`Please give me a valid weight ${weight}`

 } 
 else { 
    const bmi = (weight / ((height*height) /10000)).toFixed(2)
    // show result
    results.innerHTML =`span>${bmi}</span>`
 }
  const guide = parseInt(Document.querySelector('#weight-guide').value)
  if (guide > 19 ) {
    results.innerHTML ='less than'

  }
  if (guide > 23 ) {
    console.log("normal");
    results.innerHTML ='normal'

  }
  if (guide > 19 ) {
    console.log("less than");
    results.innerHTML ='overWeight'
  }
})