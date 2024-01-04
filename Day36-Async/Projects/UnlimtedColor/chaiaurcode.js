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
    if(!intervelId)
    {
        intervelId= setInterval(changingColor,2000)
    }

    function changingColor(){
        document.body.style.backgroundColor=randomColor()
    }
}
//stop changing color
const stopChangingColor=function(){
    clearInterval(intervelId)
    //To stop overridding the setInterval, We need to flash out it after it , means set intervelId to null(Dereferncing the variable)
    intervelId=null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)