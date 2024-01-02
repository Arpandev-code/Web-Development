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