const closebtn=document.getElementById("p")
closebtn.addEventListener("click",()=>{
    document.querySelector("header").style.display="none"
})
const body=document.querySelector("body")
body.addEventListener("dblclick",()=>{
    document.querySelector("header").style.display="flex"

})