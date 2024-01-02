let a=[1,93,5,6,88]

//forEach loop
a.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})

// //ForIn
let obj={
    1:'a',
    2:'b',
    3:'c'
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}
//ForOf

for (const iterator of a) {
    console.log(iterator);
}