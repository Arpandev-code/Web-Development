// JavaScript Exercise 10 - Business Name Generator Optimized solution
let obj1={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let obj2={
    1:"Engins",
    2:"Foods",
    3:"Garments"
}
let obj3={
    1:"Bros",
    2:"Limited",
    3:"Hub",
}

var rand1=Math.floor(Math.random()*3+1)
var rand2=Math.floor(Math.random()*3+1)
var rand3=Math.floor(Math.random()*3+1)

console.log(obj1[rand1]+" "+obj2[rand2]+" "+obj3[rand3])