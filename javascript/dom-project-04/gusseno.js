let randNumber = parseInt(Math.random()*100 +1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const gussesSolt = document.querySelector('.guesses')
const Remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const starOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];

let numGuess = 1;

let playGame = true;
if (playGame) {
    submit.addEventListener('click',function (e){
   e.preventDefault();
   const gusses = parseInt(userInput.value)
   console.log(gusses);
   validations(gusses)
    })
}

function validations(gusses) {
    if (isNaN(gusses)) {
        alert("plz enter valid number ")
    }else if (gusses < 1) {
        alert("plz enter a number  more than 1")
    }
    else if (gusses > 100) {
        alert("plz enter a number  less than 100")
    }else{
        prevGuess.push(gusses)
    
    if (numGuess ===11) {
        displayGusses(gusses)
        displayMessage(`Game over. random number was ${randNumber}`)
        endGame()
    }
    else{
    displayGusses(gusses)
    checkGusses(gusses)
    }
  }
}
function checkGusses(gusses) {
    if (gusses === randNumber) {
       displayMessage(`gusses is right`) 
       endGame()
    }else if (gusses < randNumber) {
        displayMessage(`Number is Too LOW`) 
    }
    else if (gusses > randNumber) {
        displayMessage(`Number is Too HIGH`) 
    }
}
function displayGusses (gusses) {
    userInput.innerHTML =''
    gussesSolt.innerHTML += `${gusses}, `
    numGuess++
    Remaining.innerHTML =`${11-numGuess}`
}
function displayMessage (message) {
  lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame () {
    userInput.value="";
    userInput.setAttribute('disabled', "")
    p.classList.add('button') 
      p.innerHTML=`<h2 id="newGame">Start newGame</h2>`
starOver.appendChild(p)
playGame = false
newGame()
}


function newGame () {
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click',function (e) {
     randNumber = parseInt(Math.random()*100 +1);
     prevGuess = [];
     numGuess =1
     gussesSolt.innerHTML=''
     Remaining.innerHTML =`${11-numGuess}`
     userInput.removeAttribute('disabled')
     starOver.removeChild(p)
     playGame= true
   })
}