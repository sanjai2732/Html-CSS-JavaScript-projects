const newUser=document.getElementById("NewEmail")
const CreatePassword=document.getElementById("NewPassword")
const ConfirmPassword=document.getElementById("ConfirmPassword")
document.getElementById("Confirm").addEventListener("click",()=>{
     let getName=newUser.value.toLowerCase().trim()
     let getPassword=CreatePassword.value.toLowerCase().trim()
     let getConfirmPassword=ConfirmPassword.value.toLowerCase().trim()

     if(getPassword===getConfirmPassword){
        console.log("welcome",getName)
     }
     else{
        incorrectPassword.style.display="block"
     }
    
})
