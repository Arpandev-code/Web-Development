let arr=[1,13,5,7,11]
// let newArr=[];

//Using For loop create a new Array in newArr using existing arr


//using map
let newArr=arr.map(e=>{
    return e**3;
})
console.log(newArr)

//filter
const greaterThenSeven=(e)=>{
    if(e>7)
    {
        return true
    }
    return false
}
console.log(arr.filter(greaterThenSeven));
//Reduce
let arr5=[1,2,3,4,5,6]
const red= (a,b)=>{
    return a*b;
}
console.log(arr5.reduce(red));
//Array.from()
console.log(Array.from('Arpandev'));