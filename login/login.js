const email=document.getElementById('email')
const password=document.getElementById('password')
const inCorrection=document.getElementById('password-error')
const createBtn=document.getElementById("signup")
let login=document.getElementById('login')
//login page function
login.addEventListener("click",ok=>{
 let ec= email.value.toLowerCase().trim()
 let phoneNo= email.value.trim()
 let pc= password.value.toLowerCase().trim()
 if(ec=="sanjaimsd27@gmail.com" && pc==="sanjai" ){
    console.log("welcome")
 }
 else if(pc==="sanjai" && phoneNo =="9360289825"){
    console.log("welcome")
 }
 else {
   inCorrection.innerHTML="incorrect Password"
     inCorrection.style.display="block"
     inCorrection.style.color="red"
 }
})
//create account page function
createBtn.addEventListener("click",ok=>{
   document.querySelector('.container').style.display="none"
   document.querySelector('.CreateAccount').style.display="grid"
})

//back to login 
backtologin.addEventListener("click",ok=>{
   document.querySelector('.CreateAccount').style.display="none"
   document.querySelector('.container').style.display="grid"
   
})
