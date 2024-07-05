let min=document.getElementById("min")
let sec=document.getElementById("sec")
let m=0,s=0,running=false;
let timer=null
function start(){
    if(running){//stop
        clearInterval(timer)
        running=false
}
   else{
    timer=setInterval(()=>{//start
       s++
        if(s==60){
            s=0
            m++
        }
        sec.innerHTML=s<10?"0"+s:s
        min.innerHTML=m<10?"0"+m:m
    },100)
    running=true
   }
}
function reset(){//reset
    clearInterval(timer)
    running=false
    m=0
    s=0
    sec.innerHTML="00"
    min.innerHTML="00"
}
