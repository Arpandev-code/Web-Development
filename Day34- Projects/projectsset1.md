# Projects realated to DOM

# Project Link
[click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1 solution code

```javascript
const buttons= document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    switch(e.target.id)
    {
      case 'grey':
        body.style.backgroundColor=e.target.id
        break;
      case 'white':
        body.style.backgroundColor=e.target.id
        break;
      case 'blue':
        body.style.backgroundColor=e.target.id
        break;
      case 'yellow':
        body.style.backgroundColor=e.target.id
        break;
      case 'purple':
        body.style.backgroundColor=e.target.id
        break;
      default:
        body.style.backgroundColor='white'
    }
  })
})

```
## project 2 solution code

```javascript
const form = document.querySelector('form');
//this usecase will give you empty values, So dont do it
//const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else
  {
   const bmi= (weight/((height*height)/10000)).toFixed(2)
   //show the result
   results.innerHTML=`<span>${bmi}</span>`
   const guide=document.querySelector('#weight-guide')
   if(bmi<18.6)
   {
     guide.innerHTML=`<span>${bmi} is Underweight</span>`
   }else if(bmi<24.9 && bmi>18.6)
   {
     guide.innerHTML=`<span>${bmi} is Normal</span>`
   }else if(bmi>24.9){
     guide.innerHTML=`<span>${bmi} is Overweight</span>`
   }
  }
});

```
## project 3 solution code
```javascript
document.getElementById('clock')
// let date= new Date()
// console.log(date.toLocaleTimeString())

setInterval(()=>{
let date= new Date()
clock.innerHTML=date.toLocaleTimeString();
},1000)

```
## project 4 solution code
```javascript
let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess= parseInt(userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    // This method will validate number if it's between 1-100
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    }else if(guess<1)
    {
        alert('Please Enter a Valid number between 1-100')
    }else if(guess>100){
        alert('Please Enter a Valid number between 1-100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11)
        {
            displayGuess(guess)
            displayMessage(`Gameover! Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //check the guess=== the random number or maybe high or low
    if(guess===randomNumber)
    {
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber)
    {
        displayMessage(`Number is too low`)
    }else if(guess>randomNumber)
    {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    //Clean the input field, guess array update, update guess
    // remaining
    userInput.value=''
    guessSlot.innerHTML +=`${guess} `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11 -numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}
```