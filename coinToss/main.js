let rade=document.getElementById("rade")
let coin= document.querySelector(".coin")
//click button
document.querySelector("button").addEventListener("click",()=>{
    coin.setAttribute('id','coin')
    let coinid=document.getElementById("coin")
    setTimeout(()=>{
    let random=Math.floor(Math.random()*2)
    if(random==1){
        rade.innerHTML="Heads"
    }
    else{
        rade.innerHTML="Tails"
        document.querySelector(".choose").innerHTML="T"
        coinid.style.background="none"
        coinid.style.backgroundColor="black"
    }
    
    },4000)
})
//click coin
coin.addEventListener("click",()=>{
    coin.setAttribute('id','coin')
    let coinid=document.getElementById("coin")
    setTimeout(()=>{
    let random=Math.floor(Math.random()*2)
    if(random==1){
        rade.innerHTML="Heads"
    }
    else{
        rade.innerHTML="Tails"
        document.querySelector(".choose").innerHTML="T"
        coinid.style.background="none"
        coinid.style.backgroundColor="black"
    }
    
    },4000)
})