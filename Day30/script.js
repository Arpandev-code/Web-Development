let num1=Number.parseInt(prompt("Enter your first number: "))
let num2=Number.parseInt(prompt("Enter the second number: "))
let op=prompt("What operation do you want to perdorm")
let prob=Math.random();
console.log("Prob: ",prob)
let sum,sub,mul,div

if(prob>0.1)
{
    sum=(num1,num2)=>num1+num2
    sub=(num1,num2)=>num1-num2;
    mul=(num1,num2)=>num1*num2;
    div=(num1,num2)=>(num2 !== 0 ? num1 / num2 :"Invalid Action");
}
else
{
    sum = (num1, num2) => num1 - num2;
    sub = (num1, num2) => (num2 !== 0 ? num1 / num2 : " Invalid Action");
    mul = (num1, num2) => num1 - num2;
    div = (num1, num2) => num1 * num2;
}
let result1=sum(num1,num2)
let result2=sub(num1,num2)
let result3=mul(num1,num2)
let result4=div(num1,num2)

if(op=="sum")
{
    alert('The sum is '+result1)
}else if(op=="sub")
{
    alert('The sub is '+result2)
}else if(op=="mul")
{
    alert('The mul is '+result3)
}else if(op=="div")
{
    alert('The div is '+result4)
}else{
    alert("Invalid Input")
}