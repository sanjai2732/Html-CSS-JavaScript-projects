// setInterval(()=>{
// const Hour=document.getElementById("hr")
// const Min=document.getElementById("min")
// const Sec=document.getElementById("sec")
// let hour=new Date().getHours()
// let min=new Date().getMinutes()
// let sec=new Date().getSeconds()
// Hour.innerHTML=hour<10?"0"+hour:hour
// Min.innerHTML=min<10?"0"+min:min
// Sec.innerHTML=sec<10?"0"+sec:sec
// if(hour>12){
//     const Section=document.getElementById("section")
//     Section.innerHTML="PM"
// }
// },1000)"

function timeCount(){
    let time=new Date()
    let hour=time.getHours()
    let min=time.getMinutes()
    let sec=time.getSeconds()
    document.getElementById("hr").innerHTML=hour<10?"0"+hour:hour
    document.getElementById("min").innerHTML=min<10?"0"+min:min
    document.getElementById("sec").innerHTML=sec<10?"0"+sec:sec
    if(hour>12){
        hour=hour-12
        document.getElementById("section").innerHTML="PM"
    }
    }
setInterval(timeCount,100)
   