// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task")
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log("Async Resolved");
// })

// const PromiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"chai@example.com"})
//     },1000)
// })
// PromiseThree.then(function(user){
//     console.log(user);
// })

// const PromiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error)
//         {
//             resolve({username:"Arpandev", password:"123"})
//         }else{
//             reject("ERROR:something went wrong")
//         }
//     },1000)
// });
// PromiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>console.log("The promise is either resolved or rejected"));

// const PromiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error)
//         {
//             resolve({username:"JS", password:"13"})
//         }else{
//             reject("ERROR:JS went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response= await PromiseFive
//         console.log(response);
//     } catch (error) {
//        console.log(error); 
//     }
// }
// consumePromiseFive()

// async function getAllUser(){
//  try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json();
//     console.log(data);
//  } catch (error) {
//     console.log(error);
//  }
// }
// getAllUser()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(
    function(error){
        console.log(error);
    }
)
