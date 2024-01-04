//Genarate random color

const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++)
    {
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color
}
//For testing the color HEX
console.log(randomColor());
let intervelId
//start Changing Color
const startChangingColor=function(){
    function changingColor(){
        document.body.style.backgroundColor=randomColor()
    }
   intervelId= setInterval(changingColor,2000)
}
//stop changing color
const stopChangingColor=function(){
    clearInterval(intervelId)
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)