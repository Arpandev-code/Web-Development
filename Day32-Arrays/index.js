let arr=[1,2,3,4,5]
//Index  0,1,2,3,4
// console.log(arr,typeof arr)
// console.log(arr.length)

//toString
console.log(arr.toString());
//Join
console.log(arr.join(" and "));
//Pop
console.log(arr.pop());
console.log(arr);
//Push()
console.log(arr.push("Harry"));

console.log(arr)
//shift
console.log(arr.shift());
console.log(arr);
//unshift
console.log(arr.unshift("jack"));
//delete
console.log(delete arr[1]);
console.log(arr);

//Concat()
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[7,8,9]

console.log(arr1.concat(arr2,arr3));

//sort()
let a=[3,1,5,0]
console.log(a.sort());

//splice
let num=[1,2,3,4,5,6,7]
console.log(num.splice(0,3));
console.log(num);

//slice
let sl=[1,2,3,4]
console.log(sl.slice(4));
console.log(sl.slice(1,3));




