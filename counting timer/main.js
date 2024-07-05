const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
//--------------function------------
function UpdateTime(){
const currentYear=new Date().getFullYear()
const newYear=new Date(`january 1 ${currentYear +1} 00:00:00`)
const currenDate=new Date();
const diff=newYear-currenDate;
console.log(diff)
const d=Math.floor(diff/1000/60/60/24)
const hr=Math.floor((diff/1000/60/60)%24)
const min=Math.floor((diff/1000/60)%60)
const sec=Math.floor((diff/1000)%60)
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=hr<10?"0"+hr:hr;
minutes.innerHTML=min<10?"0"+min:min;
seconds.innerHTML=sec<10?"0"+min:sec;
}
UpdateTime()
setInterval(UpdateTime,1000)
/*
1000ms=1s
60s=1m
60m=1hr
24hr=1day
*/