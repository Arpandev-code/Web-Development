const requestUrl='https://api.github.com/users/Arpandev-code'

const xhr = new XMLHttpRequest()
xhr.open('GET',requestUrl)
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
       const data= this.responseText;
       console.log(typeof data);
       const JSONdata= JSON.parse(this.responseText)
       console.log(`My Follower: ${JSONdata.followers}`);
       console.log(JSONdata.avatar_url);
       document.querySelector('.circle').innerHTML=`<img src="${JSONdata.avatar_url}" alt="My Github avatar" width="100" height="100" style="border-radius: 50%;">`
       document.querySelector('h3').innerHTML=`Follower:${JSONdata.followers}`
    }
}
xhr.send();
