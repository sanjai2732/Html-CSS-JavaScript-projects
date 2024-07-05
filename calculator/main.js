function number(n){
    const display=document.getElementById('display')
    display.value+=n
}
function opt(n){
    const display=document.getElementById('display')
    display.value+=n
}
function reset(){
    const display=document.getElementById('display')
    display.value=""
}
function result(){//=
     const display=document.getElementById('display')
    display.value=eval(display.value)//eval means calculting string values
}
let body=document.querySelector('body').addEventListener("keydown",(e)=>{
    if(e.key==='Enter'){
        result()
    }
})

function closebtn(){
    document.getElementById("container").style.display="none"
    
}
